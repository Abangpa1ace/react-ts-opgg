import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import { POSITIONS } from '@/constants';
import { setWinRate } from '@/utils/common';

type Props = {
  positions: Undefinable<PositionType[]>;
}

const DataPosition: React.FC<Props> = ({ positions }) => {
  return (
    <ScDataPosition>
      <p className='title'>선호 포지션</p>
      {positions?.length && positions.sort((a,b) => b.games - a.games).slice(0,2).map((position, i) => 
        <div key={position?.positionName + i} className='position-item'>
          <img src={`/asset/img/pos-logo-${position.position.toLowerCase()}.svg`} alt='position-logo' />
          <div className='desc'>
            <p className='name'>{POSITIONS[position.position]}</p>
            <p className='data'>
              <span className='partial'>{position.games * 5}%</span>
              <span className='win-rate'>승률 <b>{setWinRate(position.wins, position.losses)?.value}</b>%</span>
            </p>
          </div>
        </div>
      )}
    </ScDataPosition>
  )
}

const ScDataPosition = styled.div` ${s('p(16)')}
  .title ${s(`fs(12);`)};

  .position-item { ${s('flex; flex-ai(center); mt(22);')}
    img ${s('wh(28);')}

    .desc { ${s('ml(8);')}
      .name ${s(`c(${theme.black}); fs(14);`)}
      .data { ${s('h(11);')}
        .partial ${s(`fs(11); bold; c(${theme.bluish});`)}
        .win-rate ${s(`pl(6); ml(6); -l(${theme.silver3}); c(${theme.brownishGrey2}); fs(11);`)}
      }
    }
  }
`

export default DataPosition