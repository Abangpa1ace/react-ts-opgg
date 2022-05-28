import React, { useState } from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import { FiStar } from'react-icons/fi';
import { VscClose } from'react-icons/vsc';

type Props = {
  name: string
  needDelete?: boolean;
  isLike: boolean;
  onToggleLike: (name: string) => void;
  onClickDelete: (name: string) => void;
}

const SearchRecentItem: React.FC<Props> = ({ name, needDelete, isLike, onClickDelete, onToggleLike }) => {
  const [like, setLike] = useState<boolean>(isLike);

  const handleToggleLike = () => {
    setLike(like => !like)
    onToggleLike(name)
  }

  return (
    <ScSearchRecentItem>
      <p className='name'>{name}</p>
      <div className='buttons'>
        <button onClick={handleToggleLike} className='like-btn'>
          <FiStar className={like ? 'like' : ''} />
        </button>
        {needDelete ? <button onClick={() => onClickDelete(name)} className='delete-btn'><VscClose /></button> : <></>}
      </div>
    </ScSearchRecentItem>
  )
}

const ScSearchRecentItem = styled.li` 
  ${s(`flex-center; flex-jc(space-between); h(40); p(4,15); bgc(#fff);`)}
  
  .name ${s(`c(${theme.slateGrey}); fs(12);`)}

  .buttons { ${s('flex-center;')}
    > button { ${s('p(4);')}
      &.like-btn {
        svg { ${s(`stroke(${theme.slateGrey})`)}
          &.like ${s(`stroke(${theme.yellowOchre}); fill(${theme.yellowOchre});`)}
        }
      }

      &.delete-btn {
        svg ${s(`fill(${theme.slateGrey});`)}
      }
    }
  }

`

export default SearchRecentItem