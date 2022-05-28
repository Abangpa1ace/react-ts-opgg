import React from 'react'
import styled from 'styled-components'
import s from '@/styles';

const Loader = () => {
  return (
    <ScLoader>
      <p>로딩중!!</p>
    </ScLoader>
  )
}

const ScLoader = styled.div` ${s('fix; alt(0,0); flex-center; bgc(rgba(0,0,0,0.7));')}
  width: 100vw;
  height: 100vh;

  p ${s('c(#fff); fs(20);')};
`

export default Loader