import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import TextInput from '@/views/components/common/input/TextInput';
import useReactRouter from "@/hooks/useReactRouter";
import SearchAutoComplete from './SearchAutoComplete';
import { getStorage, setStorage } from '@/utils/storage';

const HeaderSearch = () => {
  const { query: { name }, navigate } = useReactRouter();
  // const searchName = useRef<string>('')
  const [searchName, setSearchName] = useState<string>(name as string);
  const [onAutoComplete, setOnAutoComplete] = useState<boolean>(false);

  const handleInput = (value: string) => {
    setSearchName(value)
  }

  const handleSubmit = () => {
    const recents = getStorage<string[]>('recent', false) || []
    setStorage('recent', [...recents, searchName], false)
    navigate(`/summoner?name=${searchName}`)
  }

  return (
    <ScHeaderSearch className='header-search'>
      <div className='search-wrapper'>
        <TextInput 
          initValue={name ? name as string : ''} 
          updateValue={handleInput} 
          onFocus={() => setOnAutoComplete(true)}
          onBlur={() => setOnAutoComplete(false)}
          placeholder='소환사명, 챔피언...' 
          className='input' 
        />
        <button onClick={handleSubmit}  className='search-btn'>.GG</button>
      </div>
      {onAutoComplete && <SearchAutoComplete name={searchName} />}
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