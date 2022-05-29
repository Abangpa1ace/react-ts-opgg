import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import useReactRouter from "@/hooks/useReactRouter";
import RecentSummaryData from './RecentSummaryData'
import { getSummonerMatchDetail, getSummonerMatches } from '@/services';
import { TAB_LIST } from '@/constants';
import s, { theme } from '@/styles';
import MatchGameItem from './MatchGameItem';

const SummonerInfoRight: React.FC = () => {
  const { query: { name } } = useReactRouter();
  const [summonerMatches, setSummonerMatches] = useState<SummonerMatchesDto>(null)
  const summonerMatchGames = useRef<MatchGameType[]>([]);
  const [focusTab, setFocusTab] = useState<keyof TabType>('전체');
  const [showMatchGames, setShowMatchGames] = useState<MatchGameType[]>([]);

  useEffect(() => {
    fetchSummonerMatches();
  }, [name])

  useEffect(() => {
    const matchGames = summonerMatchGames.current.filter(match => focusTab === '전체' ? true : focusTab === match.gameType);
    setShowMatchGames(matchGames)
  }, [focusTab])

  const fetchSummonerMatches = async () => {
    const matches = await getSummonerMatches(name as string)
    const games = await matches?.games as GameType[]
    setSummonerMatches(matches)

    const matchGames = await fetchDetailsByGames(games);
    summonerMatchGames.current = matchGames
    setShowMatchGames(matchGames)
  }

  const fetchDetailsByGames = async (games: GameType[]) => {
    const details = await Promise.all(games.map((game) => getSummonerMatchDetail(name as string, game.gameId)));
    return details.map(detail => {
      const game = games.find(game => game.gameId === detail?.gameId)
      return { ...detail, ...game } as MatchGameType
    })
  }

  const setGameTabs = () => {
    return Object.entries(TAB_LIST).map(([k,v]) => 
      <p key={k} onClick={() => setFocusTab(k as keyof TabType)} className={`tab ${k === focusTab ? 'on' : ''}`}>{v}</p>)
  }

  return (
    <ScSummonerInfoRight>
      <GameTabs>{setGameTabs()}</GameTabs>
      <RecentSummaryData summonerMatches={summonerMatches} />
      <div className={`match-game-list ${!showMatchGames.length ? 'empty' : ''}`}>
        {!!showMatchGames.length ? showMatchGames?.map(match => <MatchGameItem match={match} key={match.gameId}/>) : '매치정보를 불러오지 못했습니다!'}
      </div>
    </ScSummonerInfoRight>
  )
}

export const ScSummonerInfoRight = styled.div` 
  .match-game-list { ${s('mt(16);')}
    &.empty { ${s(`flex-center; bgc(${theme.white5}); -a(${theme.silver3}); fs(15); c(${theme.greyishBrown})`)};
      height: calc(100vh - 500px);
    }
  }
`

const GameTabs = styled.nav` ${s(`flex; gap(24); h(36); px(16); bgc(${theme.white4}); -a(${theme.silver3}); -b(transparent);`)}
  .tab { ${s(`c(${theme.greyishBrown}); fs(12,36); pointer;`)}
    &:hover:not(.on) ${s('o(.7);')}
    &.on { ${s(`rel; c(${theme.bluish});`)};
      &:before ${s(`cnt(''); abs; alb(0,-2); wh(100%,2); bgc(${theme.bluish});`)}
    }
  }
`

export default SummonerInfoRight