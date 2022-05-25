import React from 'react'
import styled from 'styled-components'
import { setKdaScore, setWinRate } from '@/utils/common';
import s, { theme } from '@/styles';
import { setDecimal } from '@/utils/number';

type Props = {
  summary: Undefinable<SummaryType>;
}

const DataGraph: React.FC<Props> = ({ summary }) => {
  const kdaScore = setKdaScore(summary)
  const winRate = setWinRate(summary?.wins, summary?.losses)

  return (
    <ScDataGraph>
      <div className='win-lose'>
        <p>20전 {summary?.wins}승 {summary?.losses}패</p>
        <div className='graph' 
          style={{ background: `conic-gradient(
            ${theme.coral} 0% ${winRate ? 100 - winRate.value : 0}%, 
            ${theme.bluish} ${winRate ? 100 - winRate.value : 100}% 100%)` }}
        >
          <div className='percent'>{winRate?.text}</div>
        </div>
      </div>
      <div className='kda'>
        <p className='fraction'>
          <em>{setDecimal(summary?.kills, 20)}</em> / <em className='red'>{setDecimal(summary?.deaths, 20)}</em> / <em>{setDecimal(summary?.assists, 20)}</em>
        </p>
        <p className='average'>
          <span className='score' style={{ color: kdaScore?.color }}>{kdaScore?.value}:1</span>
          <span style={{ color: winRate?.color }}>({winRate?.text})</span>
        </p>
      </div>
    </ScDataGraph>
  )
}

const ScDataGraph = styled.div` ${s('flex-center; p(16,24);')}
  .win-lose {
    > p ${s(`mb(14); fs(12); c(${theme.brownishGrey2}); tac;`)}
    .graph { ${s(`rel; wh(90); br(50%);`)}
      .percent ${s(`cnt(''); abs; alt(13,13); flex-center; wh(64); bgc(${theme.white5}); c(${theme.greyishBrown}); fs(14); bold; br(50%);`)}
    }
  }

  .kda { ${s('ml(30); tac;')}
    .fraction { ${s(`c(${theme.warmGrey2}); fs(11);`)}
      em { ${s(`c(${theme.black}); bold;`)}
        &.red ${s(`c(${theme.reddish});`)}
      }
    }

    .average { ${s('mt(6); fs(16);')}
      .score ${s('mr(5); bold;')}
    }
  }
`

export default DataGraph