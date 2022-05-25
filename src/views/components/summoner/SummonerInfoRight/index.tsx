import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useReactRouter from "@/hooks/useReactRouter";
import RecentSummaryData from './RecentSummaryData'
import { getSummonerMatches } from '@/services';
import s, { theme } from '@/styles';

type Props = {
  summoner: SummonerDto;
}

type TabType = {
  '전체': '전체',
  '솔랭': '솔로랭크',
  '자유 5:5 랭크': '자유랭크', 
  '일반': '일반게임',
  '무작위 총력전': '무작위 총력전',
}

const tabList: TabType = {
  '전체': '전체',
  '솔랭': '솔로랭크',
  '자유 5:5 랭크': '자유랭크', 
  '일반': '일반게임',
  '무작위 총력전': '무작위 총력전',
}

const SummonerInfoRight: React.FC<Props> = ({ summoner }) => {
  const { query: { name } } = useReactRouter();
  const [summonerMatches, setSummonerMatches] = useState<SummonerMatchesDto>(null)
  const [focusTab, setFocusTab] = useState<keyof TabType>('전체');
  
  useEffect(() => {
    fetchSummonerMatches();
  }, [name])

  const fetchSummonerMatches = async () => {
    const summonerMatches = await getSummonerMatches(name as string)
    setSummonerMatches(summonerMatches)
    console.log(summonerMatches)
  }


  return (
    <ScSummonerInfoRight>
      <GameTabs>
        {Object.entries(tabList).map(([k,v]) => 
          <p key={k} onClick={() => setFocusTab(k as keyof TabType)} className={`tab ${k === focusTab ? 'on' : ''}`}>{v}</p>
        )}
      </GameTabs>
      <RecentSummaryData summonerMatches={summonerMatches} />
    </ScSummonerInfoRight>
  )
}

export const ScSummonerInfoRight = styled.div` 
  
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