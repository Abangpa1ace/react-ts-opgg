import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import { setDecimal } from '@/utils/number';
import { setKdaScore, setWinRate } from '@/utils/common';

type Props = {
  champion: ChampionType;
  category: keyof SummonerMostsType;
}

const MostsTabListItem: React.FC<Props> = ({ champion, category }) => {
  const kdaScore = setKdaScore(champion)
  const winRate = setWinRate(champion.wins, champion.losses)

  const setCs = () => {
    const { cs, games } = champion;
    return `CS ${cs} (${setDecimal(cs, games)})`
  }

  const setRightInfo = () => {
    return category === 'champions'
    ?
      <>
        <div className='kda'>
          <h6 style={{ color: kdaScore?.color }}>{kdaScore?.text}</h6>
          <p>
            {[champion.kills, champion.deaths, champion.assists].map(v => setDecimal(v, champion.games)).join(' / ')}
          </p>
        </div>
        <div className='win-rate'>
          <h6 style={{ color: winRate?.color }}>
            {winRate?.text}
          </h6>
          <p>{champion.games}게임</p>
        </div>
      </>
    :
      <>
        <div className='win-lose'>
          <p className='rate' style={{ color: winRate?.color }}>{winRate.text}</p>
          <div className='graph'>
            <p className='wins' style={{ width: `${winRate.value}%`, minWidth: '30%' }}>{champion.wins}승</p>
            <p className='losses' style={{ width: `${100 - winRate.value}%`, minWidth: '30%' }}>{champion.losses}패</p>
          </div>
        </div>
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
  &:not(&:first-of-type) ${s(`-t(${theme.silver3})`)}

  .left { ${s('flex;')}
    img ${(s('wh(45); br(50%);'))};
    .name-holder { ${s('flex-column; flex-ai(flex-start); ml(10);')}
      h5 ${s(`max-w(56); c(${theme.brownishGrey}); fs(13); bold; ellipsis;`)}
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

    .right { ${s('dib;')} 
      > div.win-lose { ${s('flex-center; gap(12); tal;')}
        .rate ${s('fs(13); c(#879292); bold;')}
        .graph { ${s('flex; flex-jc(space-between); wh(123,24); br(4); crop;')}
          p { ${s('m(0); px(5); c(#fff); lh(24);')}
            &.wins ${s(`bgc(${theme.bluish})`)}
            &.losses ${s(`bgc(${theme.coral}); tar;`)}

          }
        }

      }
    }
  }
`

export default MostsTabListItem