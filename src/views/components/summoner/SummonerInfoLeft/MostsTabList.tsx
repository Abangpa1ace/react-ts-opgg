import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useReactRouter from "@/hooks/useReactRouter";
import s, { theme } from '@/styles';
import MostsTabListItem from './MostsTabListItem';
import { getSummonerMosts } from '@/services';

const tabText: { [k in keyof SummonerMostsType]: string } = {
  champions: '챔피언 승률',
  recentWinRate: '7일간 랭크 승률',
}

type SummonerMostKey = keyof SummonerMostsType

const MostsTabList: React.FC = ({ }) => {
  const { query: { name } } = useReactRouter();
  const [summonerMosts, setSummonerMosts] = useState<SummonerMostsDto>(null);
  const [tab, setTab] = useState<SummonerMostKey>('champions');

  useEffect(() => {
    fetchSummonerMosts()
  }, [name])

  const fetchSummonerMosts = async () => {
    const summonerMosts = await getSummonerMosts(name as string);
    for (let key in summonerMosts) {
      summonerMosts[key as SummonerMostKey] = summonerMosts[key as SummonerMostKey].sort((a,b) => (b.games || 0) - (a.games || 0))
    }

    setSummonerMosts(summonerMosts)
  }

  return (
    <ScMostsTabList>
      <ul className='tab-buttons'>
        {!!summonerMosts && Object.keys(summonerMosts as SummonerMostsType).map((k,i) => 
          <li key={k+i} onClick={() => setTab(k as SummonerMostKey)} className={`tab ${tab === k && 'on'}`}>
            {tabText[k as keyof SummonerMostsType]}
          </li>
        )}
      </ul>
      {!!summonerMosts && summonerMosts[tab].map((champion, i) => 
        <MostsTabListItem key={champion.id + i} champion={champion} category={tab} />
      )}
    </ScMostsTabList>
  )
}

const ScMostsTabList = styled.div` ${s(`c(${theme.brownishGrey}); -a(${theme.silver3}); bgc(${theme.white5});`)}
  .tab-buttons {
    ${s(`flex; h(44);`)}

    .tab {
      ${s(`wf; flex-center; -b(${theme.silver3}); c(#879292); bgc(${theme.white4}); fs(12); pointer;`)}
      &:not(&:first-of-type) ${s(`-l(${theme.silver3})`)}
      &:hover { opacity: .9; }
      &.on ${s(`-b(transparent); bgc(${theme.white5}); bold;`)}
    }
  }
`

export default MostsTabList