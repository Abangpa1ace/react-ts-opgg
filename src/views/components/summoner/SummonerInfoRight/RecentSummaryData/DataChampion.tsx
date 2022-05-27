import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import { setAverScore, setKdaScore, setWinRate } from '@/utils/common';

type Props = {
  champions: Undefinable<ChampionType[]>
}

const DataChampion: React.FC<Props> = ({ champions }) => {
  return (
    <ScDataChampion>
      {champions?.length && [0,1,2].map((idx) => {
        const champion = champions[idx]
        const scoreInfo =setAverScore(champion);
          return (
            <div key={champion?.id + idx} className='champion-item'>
              <img src={champion?.imageUrl || '/asset/img/empty-champion.svg'} />
              <div className='desc'>
                {!!champion
                  ?
                    <>
                      <p className='name'>{champion.name}</p>
                      <p className='data'>
                        <span className='win-rate'>
                          <em style={{ color: setWinRate(champion.wins, champion.losses, theme.black)?.color }}><b>{setWinRate(champion.wins, champion.losses)?.value}</b>% </em>
                          ({champion.wins}승 {champion.losses}패)
                        </span>
                        <span className='score' style={{ color: scoreInfo?.color }}>
                          {scoreInfo?.text}
                        </span>
                      </p>
                    </>
                  :
                    <p className='empty-text'>챔피언 정보가 없습니다.</p>
                }
              </div>
            </div>  
          )
        }
      )}
    </ScDataChampion>
  )
}

const ScDataChampion = styled.div` ${s('flex-center; flex-column; gap(12);')}
  .champion-item { ${s('flex; flex-jc(flex-start); flex-ai; wf; px(16);')}
    img ${s('wh(34); br(50%);')}
    .desc { ${s('ml(8);')}
      .empty-text ${s(`c(${theme.warmGrey2}); fs(11);`)}

      .name ${s(`c(${theme.black}); fs(14);`)}
      .data { ${s('mt(3);')}
        .win-rate ${s(`fs(11);`)}
        .score { ${s(`ml(6); pl(6); -l(${theme.silver3})'; c(${theme.greyishBrown}); fs(11); bold;`)}
          &.yellow ${s(`c(${theme.yellowOchre})`)}
        }
      }
    }
  }
`

export default DataChampion