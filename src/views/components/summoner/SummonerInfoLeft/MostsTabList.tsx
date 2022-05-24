import React, { useState } from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import MostsTabListItem from './MostsTabListItem';

type Props = {
  summonerMosts: SummonerMostsDto;
}

const tabText: { [k in keyof SummonerMosts]: string } = {
  champions: '챔피언 승률',
  recentWinRate: '7일간 랭크 승률',
}

const MostsTabList: React.FC<Props> = ({ summonerMosts }) => {
  const [tab, setTab] = useState<keyof SummonerMosts>('champions');

  return (
    <ScMostsTabList>
      <ul className='tab-buttons'>
        {!!summonerMosts && Object.keys(summonerMosts as SummonerMosts).map(k => 
          <li key={k} onClick={() => setTab(k as keyof SummonerMosts)} className={`tab ${tab === k && 'on'}`}>{tabText[k as keyof SummonerMosts]}</li>
        )}
      </ul>
      {!!summonerMosts && summonerMosts[tab].map(champion => <MostsTabListItem champion={champion} category={tab} />)}
    </ScMostsTabList>
  )
}

const ScMostsTabList = styled.div` ${s(`c(${theme.brownishGrey}); -a(${theme.silverThree}); bgc(${theme.whiteFive});`)}
  .tab-buttons {
    ${s(`flex; h(44);`)}

    .tab {
      ${s(`wf; flex-center; -b(${theme.silverThree}); c(#879292); bgc(${theme.whiteFour}); fs(12); pointer;`)}
      &:not(&:first-of-type) ${s(`-l(${theme.silverThree})`)}
      &:hover { opacity: .9; }
      &.on ${s(`-b(transparent); bgc(${theme.whiteFive}); bold;`)}
    }
  }
`

export default MostsTabList