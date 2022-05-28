import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import TextInput from '@/views/components/common/input/TextInput';
import useReactRouter from "@/hooks/useReactRouter";
import SearchAutoComplete from './SearchAutoComplete';
import { getStorage, setStorage } from '@/utils/storage';
import RClickOutside from '@/views/components/common/hoc/RClickOutside';

const HeaderSearch = () => {
  const { navigate } = useReactRouter();
  const [searchName, setSearchName] = useState<string>('');
  const [onAutoComplete, setOnAutoComplete] = useState<boolean>(false);

  const recordStorage = (name: string) => {
    const recents = getStorage<string[]>('recent', false) || []
    const newRecents = [...new Set([...recents, name.trim()].filter(is => is).reverse())].slice(0,10)
    setStorage('recent', newRecents, false)
  }
  
  const goToSummonerPage = (name: string) => navigate(encodeURI(`/summoner?name=${name.trim()}`))

  const handleInput = (value: string) => {
    setSearchName(value)
  }

  const handleFocus = () => {
    setSearchName('')
    setOnAutoComplete(true);
  }

  const routeToSearchSummoner = (name: string) => {
    if (!name.trim()) navigate('/summoner')
    else {
      setOnAutoComplete(false);
      recordStorage(name)
      goToSummonerPage(name);
    }
  }

  return (
    <ScHeaderSearch className='header-search'>
      <RClickOutside handleClickOutside={() => setOnAutoComplete(false)}>
        <div className='search-wrapper'>
          <TextInput
            updateValue={handleInput} 
            onFocus={handleFocus}
            useFocusInit
            placeholder='소환사명, 챔피언...' 
            className='input' 
          />
          <button onClick={() => routeToSearchSummoner(searchName)} className='search-btn'>.GG</button>
        </div>
        {onAutoComplete && <SearchAutoComplete name={searchName} onClickItem={routeToSearchSummoner} />}
      </RClickOutside>
    </ScHeaderSearch>
  )
}

export const ScHeaderSearch = styled.div`
  ${s(`rel; w(260);`)}

  .search-wrapper { ${s(`flex-center; flex-jc(space-between); wf; p(7,12,7,14); bgc(#fff); br(2);`)}
    .input { ${s('wf; mr(10);')}
      input { ${s(`wf; fs(12);`)};
        /* transition: all .3 ease;
        &:focus ${s('w(190);')} */
      }
    } 

    .search-btn ${s(`c(${theme.azure}); fs(18); bold; pointer;`)}
  }
`

export default HeaderSearch