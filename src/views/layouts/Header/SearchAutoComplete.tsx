import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import s, { extendHeight, showHide, theme } from '@/styles';
import SearchSummoners from './SearchSummoners';
import SearchRecent from './SearchRecent';

type Props = {
  name: string;
}

const SearchAutoComplete: React.FC<Props> = ({ name }) => {
  const setContents = () => {
    console.log(name)
    return name ? <SearchSummoners name={name} /> : <SearchRecent />
  }
  return (
    <ScSearchAutoComplete>
      <div className='complete-result'>
        {setContents()}
      </div>
    </ScSearchAutoComplete>
  )
}

const ScSearchAutoComplete = styled.div` ${s(`abs; alt(0,38); wf; max-h(200); bgc(#fff); br(2); z(1100);`)}
  
  /* animation: ${extendHeight('160px')} .3s ease forwards; */
`

export default SearchAutoComplete