import { getStorage, setStorage } from '@/utils/storage'
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import SearchRecentItem from './SearchRecentItem';

type Props = {
  onClickItem: (name: string) => void;
}

const tabData: StringObject = {
  recent: '최근검색',
  like: '즐겨찾기',
}

const SearchRecent: React.FC<Props> = ({ onClickItem }) => {
  const recents = useRef<string[]>(getStorage<string[]>('recent', false) || []);
  const likes = useRef<string[]>(getStorage<string[]>('like') || []);

  const [focusTab, setFocusTab] = useState<string>('recent');
  const isRecent = focusTab === 'recent';
  const [showList, setShowList] = useState<string[]>([]);

  useEffect(() => {
    setShowList(isRecent ? recents.current : likes.current)
  }, [focusTab])

  const setTabs = () => {
    return (
      <div className='tabs'>
        {Object.keys(tabData).map(tab => {
          return (
            <span key={tab} className={tab === focusTab ? 'on' : ''} onClick={() => setFocusTab(tab)}>
              {tabData[tab]}
            </span>
          )
        })}
      </div>
    )
  }

  const deleteRecent = (name: string) => {
    const newRecents = recents.current.filter(recent => recent !== name);
    setShowList(newRecents)
    recents.current = newRecents
    setStorage('recent', newRecents, false);
  }

  const toggleLike = (name: string) => {
    const isLiked = likes.current.includes(name);
    const newLikes = [...new Set(isLiked
      ? likes.current.filter(like => like !== name)
      : [...likes.current, name]
    )]

    likes.current = newLikes;
    setStorage('like', newLikes)
    if (focusTab === 'like') setShowList(newLikes);
  }

  const setResults = () => {
    return (
      <ul className='results'>
        {
          !!showList.length
            ? showList.map((name, i) => 
              <SearchRecentItem 
                name={name} needDelete={isRecent} key={name + i}
                isLike={focusTab === 'like' ? true :  likes.current.includes(name)}
                onClickItem={onClickItem} onClickDelete={deleteRecent} onToggleLike={toggleLike}
              />)
            : <p className='placeholder'>
                {isRecent ? '최근 검색한' : '즐겨찾기한'} 소환사가 없습니다!
              </p>
        }
      </ul>
    )
  }

  return (
    <ScSearchRecent>
      {setTabs()}
      {setResults()}
    </ScSearchRecent>
  )
}

const ScSearchRecent = styled.div` ${s(`c(${theme.slateGrey})`)}
  .tabs { ${s('flex; wh(100%,40);')}
    span { ${s(`flex-center; wf; fs(12); bgc(${theme.silver2}); c(${theme.warmGrey2}); pointer;`)};
      &.on ${s(`bgc(#fff); c(${theme.slateGrey}); bold;`)};
      &:hover ${s('o(.8);')};
    }
  }

  .results {
    .placeholder ${s(`flex-center; h(150); fs(13);`)}
  }
`

export default SearchRecent