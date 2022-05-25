
import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles'
import HeaderPrevTiers from './HeaderPrevTiers';
import HeaderProfile from './HeaderProfile';

type Props = {
  summoner: SummonerDto;
}

const SummonerHeader: React.FC<Props> = ({ summoner }) => {
  return (
    <ScSummonerHeader>
      <section className='container'>
        <HeaderPrevTiers previousTiers={summoner?.previousTiers} />
        <HeaderProfile summoner={summoner} />
      </section>
    </ScSummonerHeader>
  )
}

const ScSummonerHeader = styled.div`
  ${s(`h(175); pl(21); -b(${theme.white3}); py(15,12); c(${theme.slateGrey})`)}
`

export default SummonerHeader