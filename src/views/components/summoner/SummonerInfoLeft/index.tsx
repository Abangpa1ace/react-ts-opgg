import React from 'react'
import styled from 'styled-components'
import TierRankContainer from './TierRankContainer'
import MostsTabList from './MostsTabList';

type Props = {
  summoner: SummonerDto;
}

const SummonerInfoLeft: React.FC<Props> = ({ summoner }) => {
  return (
    <ScSummonerInfoLeft>
      {summoner?.leagues.map(league => <TierRankContainer league={league} key={league.tierRank.name} />)}
      <MostsTabList />
    </ScSummonerInfoLeft>
  )
}

export const ScSummonerInfoLeft = styled.div`
  
`

export default SummonerInfoLeft