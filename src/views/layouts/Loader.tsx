import React from 'react'
import styled, { keyframes } from 'styled-components'
import s from '@/styles';

const Loader = () => {
  return (
    <ScLoader>
      <div className='loader' />
    </ScLoader>
  )
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const ScLoader = styled.div` ${s('fix; alt(0,0); flex-center; bgc(rgba(0,0,0,0.6));')}
  width: 100vw;
  height: 100vh;

  .loader{ 
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 2s linear infinite;
  }
`

export default Loader