import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';

type Props = {
  match: MatchGameType
}

const SummaryScore: React.FC<Props> = ({ match }) => {
  return (
    <ScSummaryScore>
      <p className='level'>레벨 {match.champion.level}</p>
      <p className='cs'>{match.stats.general.cs} ({match.stats.general.csPerMin}) CS</p>
      <p className='contribute-kill'>킬관여 {match.stats.general.contributionForKillRate}</p>
    </ScSummaryScore>
  )
}

const ScSummaryScore = styled.li` ${s('gap(6); w(56); ml(26);')}
  p { ${s(`fs(11);`)}
    &.contribute-kill ${s(`c(${theme.scarlet})`)}
  }
`

export default SummaryScore