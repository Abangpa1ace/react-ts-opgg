import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import s, { extendHeight } from '@/styles';
import SearchSummoners from './SearchSummoners';
import SearchRecent from './SearchRecent';

type Props = {
  name: string;
}

const SearchAutoComplete: React.FC<Props> = ({ name }) => {

  return (
    <ScSearchAutoComplete>
      <div className='complete-result'>
        {!!name ? <SearchSummoners name={name} /> : <SearchRecent />}
      </div>
    </ScSearchAutoComplete>
  )
}

const ScSearchAutoComplete = styled.div` ${s(`abs; alt(0,38); wf; max-h(200); bgc(#fff); br(2); z(1100);`)}
  
  /* animation: ${extendHeight('160px')} .3s ease forwards; */
`

export default SearchAutoComplete