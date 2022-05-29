import React from 'react'
import styled from 'styled-components'
import s from '@/styles';

const SummonerInvalid: React.FC = () => {
  return (
    <ScSummonerInvalid>
      <img src='/asset/img/invalid-summoner.png' alt='invalid-summoner' />
    </ScSummonerInvalid>
  )
}

const ScSummonerInvalid = styled.section`
  ${s('flex-center; wf;')}
  height: calc(100vh - 300px);

  img ${s('w(500); br(30%);')}
`

export default SummonerInvalid