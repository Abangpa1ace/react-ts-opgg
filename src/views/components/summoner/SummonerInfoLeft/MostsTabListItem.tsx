import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import { setDecimal } from '@/utils/number';
import { setKdaScore, setWinRate } from '@/utils/common';

type Props = {
  champion: MostChampion;
  category: keyof SummonerMosts;
}

const MostsTabListItem: React.FC<Props> = ({ champion, category }) => {
  console.log(champion)
  const setCs = () => {
    const { cs, games } = champion;
    return `CS ${cs} (${setDecimal(cs, games)})`
  }

  const setRightInfo = () => {
    return category === 'champions'
    ?
      <>
        <div className='kda'>
          <h6 style={{ color: setKdaScore(champion).color }}>{setKdaScore(champion).text}</h6>
          <p>
            {[champion.kills, champion.deaths, champion.assists].map(v => setDecimal(v, champion.games)).join(' / ')}
          </p>
        </div>
        <div className='win-rate'>
          <h6  style={{ color: setWinRate(champion.wins, champion.losses).color }}>
            {setWinRate(champion.wins, champion.losses).text}
          </h6>
          <p>{champion.games}게임</p>
        </div>
      </>
    :
      <>
      </>
  }

  return (
    <ScMostsTabListItem className={category}>
      <div className='left'>
        <img src={champion.imageUrl} alt='champion-image' />
        <div className='name-holder'>
          <h5>{champion.name}</h5>
          <p>{setCs()}</p>
        </div>
      </div>
      <div className='right'>
        {setRightInfo()}
      </div>
    </ScMostsTabListItem>
  )
}

const ScMostsTabListItem = styled.div` 
  ${s('flex; flex-jc(space-between); flex-ai(center); h(53); p(4,15);')}
  &:not(&:first-of-type) ${s(`-t(${theme.silverThree})`)}

  .left { ${s('flex;')}
    img ${(s('wh(45); br(50%);'))};
    .name-holder { ${s('flex-column; flex-ai(flex-start); ml(10);')}
      h5 ${s(`c(${theme.brownishGrey}); fs(13); bold;`)}
      p ${s(`mt(3); c(#879292); fs(11);`)}
    }
  }

  .right { ${s('flex-center; gap(24);')};
    > div { ${s('tac;')}
      h6 ${s(`c(${theme.brownishGrey}); fs(13); bold;`)}
      p ${s('mt(3); c(#879292); fs(11);')}
    }
  }

  &.recentWinRate {
    .left {
      img ${(s('wh(32);'))};
      .name-holder {
        p { display: none; }
      }
    }
  }
`

export default MostsTabListItem