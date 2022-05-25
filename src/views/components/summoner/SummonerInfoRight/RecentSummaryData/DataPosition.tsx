import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import { POSITIONS } from '@/constants';

type Props = {
  positions: Undefinable<PositionType[]>;
}

const DataPosition: React.FC<Props> = ({ positions }) => {
  console.log(positions)
  return (
    <ScDataPosition>
      <p className='title'>선호 포지션</p>
      {positions?.length && positions.map(position => 
        <div key={position?.positionName} className='position-item'>
          <img src={`/asset/img/pos-logo-${position.position.toLowerCase()}.svg`} alt='position-logo' />
          <div className='desc'>
            <p className='name'>{POSITIONS[position.position]}</p>
          </div>
        </div>
      )}
    </ScDataPosition>
  )
}

const ScDataPosition = styled.div` ${s('p(16)')}
  .title ${s(`fs(12);`)};

  .position-item { ${s('flex; flex-ai; mt(22);')}
    img ${s('wh(28);')}
  }
`

export default DataPosition