import React from 'react'
import styled from 'styled-components'
import s from '@/styles'

const ErrorPage = () => {
  return (
    <ScErrorPage>
      <img src='/asset/img/error-banner.jpeg' alt='404-banner' />
      <h3>예상치 못한 오류가 발생했습니다!</h3>
    </ScErrorPage>
  )
}

const ScErrorPage = styled.div`
  ${s('flex-column; bgc(#eaeaea);')}
  height: 100vh;
  max-height: 100vh;

  img ${s('w(450); br(30%);')}
  h3 ${s('mt(40); fs(26);')}

`

export default ErrorPage