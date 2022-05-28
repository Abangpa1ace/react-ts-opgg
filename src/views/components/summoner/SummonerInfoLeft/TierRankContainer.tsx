import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import { setComma } from '@/utils/number';
import { setTierRankText, setWinRate } from '@/utils/common';

type Props = {
  league: LeagueType
}

const TierRankContainer: React.FC<Props> = ({ league }) => {
  const setTierRankInfo = () => {
    const { hasResults, wins, losses, tierRank: { name, lp } } = league
    return (
      <>
        <p className='name'>{name}</p>
        {!hasResults
          ? <p className='tier-rank unranked'>Unranked</p>
          :
          <>
            <p className='games'>총 {setComma(wins+losses)}게임</p>
            <p className='tier-rank'>{setTierRankText(league.tierRank)}</p>
            <p className='lp'><b>{lp}LP</b> / {wins}승 {losses}패</p>
            <p className='win-rate'>승률 {setWinRate(wins, losses)?.text}</p>
          </>

        }
      </>
    )
  }

  return (
    <ScTierRankContainer>
      <div className='image-wrapper'>
        {league.hasResults ? <img src={league.tierRank.imageUrl} alt="tier-image" /> : 'UNRANKED'}
      </div>
      <div className='info-wrapper'>
        {setTierRankInfo()}
      </div>
    </ScTierRankContainer>
  )
}

const ScTierRankContainer = styled.div`
  ${s(`flex; mb(8); p(10,8); bgc(${theme.white4}); -a(${theme.silver3});`)}

  .image-wrapper {
    ${s(`flex-center; wh(104); c(${theme.slateGrey});`)}
    img { ${s('wf; hf;')}; }
  }
  
  .info-wrapper { ${s('flex-column; flex-jc(center); flex-ai(flex-start); py(6); ml(8);')}
    .name ${s(`c(#879292); fs(11);`)};

    .games ${s(`mt(6); c(${theme.darkGrey}); fs(12); bold;`)}

    .tier-rank {
      ${s(`mt(6); c(${theme.bluish}); fs(15); bold;`)}
      &.unranked ${s(`c(#879292)`)}
    }

    .lp { ${s('mt(4); fs(12); c();')}
      b { color: #555e5e !important; }
    }

    .win-rate ${s('mt(3); c(#879292); fs(12);')}
  }
`

export default TierRankContainer