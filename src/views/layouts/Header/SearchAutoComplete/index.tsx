import React from 'react'
import styled from 'styled-components'
import s from '@/styles';
import SearchSummoners from './SearchSummoners';
import SearchRecent from './SearchRecent';

type Props = {
  name: string;
  onClickItem: (name: string) => void;
}

const SearchAutoComplete: React.FC<Props> = ({ name, onClickItem }) => {
  

  return (
    <ScSearchAutoComplete>
      <div className='complete-result'>
        {!!name ? <SearchSummoners name={name} onClickItem={onClickItem} /> : <SearchRecent onClickItem={onClickItem} />}
      </div>
    </ScSearchAutoComplete>
  )
}

const ScSearchAutoComplete = styled.div` ${s(`abs; alt(0,38); wf; max-h(200); bgc(#fff); br(2); z(1100);`)}
  
`

export default SearchAutoComplete