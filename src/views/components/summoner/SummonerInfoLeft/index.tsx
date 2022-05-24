import React from 'react'
import styled from 'styled-components'
import TierRankContainer from './TierRankContainer'
import MostsTabList from './MostsTabList';

type Props = {
  summoner: SummonerDto;
  summonerMosts: SummonerMostsDto;
}

const SummonerInfoLeft: React.FC<Props> = ({ summoner, summonerMosts }) => {
  return (
    <ScSummonerInfoLeft>
      {summoner?.leagues.map(league => <TierRankContainer league={league} key={league.tierRank.name} />)}
      <MostsTabList summonerMosts={summonerMosts} />
    </ScSummonerInfoLeft>
  )
}

export const ScSummonerInfoLeft = styled.div`
  
`

export default SummonerInfoLeft