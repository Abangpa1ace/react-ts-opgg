import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';

type Props = {
  players: TeamChampion[];
  myName: string
}

const SummaryPlayers: React.FC<Props> = ({ players, myName }) => {
  return (
    <ScSummaryPlayers>
      {players?.map((player, i) => (
        <div className='player-item' key={player.summonerId}>
          <img src={player.champion.imageUrl} alt={player.champion.imageUrl + i}/>
          <p className={player.summonerName === myName ? 'my' : ''}>{player.summonerName}</p>
        </div>
      ))}
    </ScSummaryPlayers>
  )
}

const ScSummaryPlayers = styled.li` ${s('ml(12)')}
  .player-item { ${s('flex-center;')}
    &:not(:first-child) ${s('mt(2);')}
    
    img ${s('wh(16); -a(#0d0819);')}
    p {
      ${s(`w(52); ml(3); fs(11); ellipsis;`)}
      &.my ${s('bold;')}
    }
  }
`

export default SummaryPlayers