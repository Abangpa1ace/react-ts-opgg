import { getSummonerInfo } from '@/services';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import { setTierRankText } from '@/utils/common';

type Props = {
  name: string;
}

const SearchSummoners: React.FC<Props> = ({ name }) => {
  const [summoners, setSummoners] = useState<SummonerDto[]>([]);

  useEffect(() => {
    fetchAutoSummoners()
  }, [name])

  const fetchAutoSummoners = async () => {
    const summoner = await getSummonerInfo(name);
    setSummoners([summoner, summoner])
  }

  const setTierText= (leagues: Undefinable<LeagueType[]>) => {
    if (!leagues) return '';

    const tierRank = leagues.find(l => l.hasResults)?.tierRank;
    return <p className='tier'>{setTierRankText(tierRank as TierType)} - {String(tierRank?.lp).slice(0,2)}LP</p>
  }

  return (
    <ScSearchSummoners>
      {summoners.length && summoners.map((summoner, i) => (
        <div className='summoner-item' key={'summoner-auto-' + i}>
          <img src={summoner?.profileImageUrl} alt='summoner-profile' />
          <div className='text'>
            <p className='nickname'>{summoner?.name}</p>
            {setTierText(summoner?.leagues)}
          </div>
        </div>
      ))}
    </ScSearchSummoners>
  )
}

const ScSearchSummoners = styled.div` ${s('py(5);')}
  .summoner-item { ${s('flex; flex-ai(center); p(5,10); pointer;')}
    &:not(:first-child) ${s('mt(5);')}
    img ${s('wh(36); br(50%);')};

    .text { ${s('ml(6);')}
      .nickname ${s('fs(12);')}
      .tier ${s(`mt(2); c(${theme.greyishBrown}); fs(11);`)}
    }
    &:hover ${s(`bgc(#ecf2ff);`)}
  }
`

export default SearchSummoners