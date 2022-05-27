import React from 'react'
import styled from 'styled-components'
import SummaryStatus from './SummaryStatus'
import s, { theme } from '@/styles';
import SummaryChampion from './SummaryChampion';
import SummaryKda from './SummaryKda';
import SummaryScore from './SummaryScore';
import SummaryItems from './SummaryItems';
import SummaryPlayers from './SummaryPlayers';
import { getStatus } from '@/utils/data';
import { STATUS_STYLES } from '@/constants';

type Props = {
  match: MatchGameType
}

const MatchGameSummary: React.FC<Props> = ({ match }) => {
  const style = STATUS_STYLES[getStatus(match)];

  return (
    <ScMatchGameSummary>
      <SummaryStatus match={match} />
      <SummaryChampion match={match} />
      <SummaryKda match={match} />
      <SummaryScore match={match} />
      <SummaryItems match={match} />
      {match?.teams.map(team => <SummaryPlayers players={team.players} myName={match.summonerName} key={team.teamId} />)}
      <div className='detail-toggle-btn' style={{ border: `1px solid ${style.subBorder}`, background: style.subBorder }}>
      
      </div>
    </ScMatchGameSummary>
  )
}

const ScMatchGameSummary = styled.ul` ${s(`flex; flex-ai(center); rel; wh(100%,96); p(4,10); c(${theme.gunmetal});`)}
  li { 
    ${s('flex-column; hf;')} 
  }

  .detail-toggle-btn ${s('abs; art(0,0); w(30); hf;')}
`

export default MatchGameSummary