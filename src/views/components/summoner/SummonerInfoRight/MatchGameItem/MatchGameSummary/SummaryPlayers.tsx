import React from 'react'
import styled from 'styled-components'
import s from '@/styles';
import useReactRouter from "@/hooks/useReactRouter";

type Props = {
  players: TeamChampion[];
  myName: string
}

const SummaryPlayers: React.FC<Props> = ({ players, myName }) => {
  const { navigate } = useReactRouter();

  return (
    <ScSummaryPlayers>
      {players?.map((player, i) => (
        <div className='player-item' key={player.summonerId} onClick={() => navigate(`/summoner?name=${player.summonerName}`)}>
          <img src={player.champion.imageUrl} alt={player.champion.imageUrl + i}/>
          <p className={player.summonerName === myName ? 'my' : ''}>{player.summonerName}</p>
        </div>
      ))}
    </ScSummaryPlayers>
  )
}

const ScSummaryPlayers = styled.li` ${s('ml(12)')}
  .player-item { ${s('flex-center; pointer;')}
    &:not(:first-child) ${s('mt(2);')}
    &:hover ${s('o(.8')}
    
    img ${s('wh(16); -a(#0d0819);')}
    p {
      ${s(`w(52); ml(3); fs(11); ellipsis;`)}
      &.my ${s('bold;')}
    }
  }
`

export default SummaryPlayers