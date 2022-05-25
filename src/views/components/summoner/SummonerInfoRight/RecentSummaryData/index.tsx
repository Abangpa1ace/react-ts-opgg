import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import DataGraph from './DataGraph';
import DataChampion from './DataChampion';
import DataPosition from './DataPosition';

type Props = {
  summonerMatches: SummonerMatchesDto
}

const RecentSummaryData: React.FC<Props> = ({ summonerMatches }) => {
  return (
    <ScRecentSummaryData>
      <DataGraph summary={summonerMatches?.summary} />
      <DataChampion champions={summonerMatches?.champions} />
      <DataPosition positions={summonerMatches?.positions} />
    </ScRecentSummaryData>
  )
}

const ScRecentSummaryData = styled.div` ${s(`flex; h(158); bgc(${theme.white5}); -a(${theme.silver3});`)}
  > div {
    &:nth-child(1) { width: 276px; }
    &:nth-child(2) { width: 228px; }
    &:nth-child(3) { width: 184px; }
    &:not(:first-child) ${s(`-l(${theme.silver3})`)}
  }
`

export default RecentSummaryData