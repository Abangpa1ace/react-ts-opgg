import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';

interface Kda {
  kill?: number;
  death?: number;
  assist?: number;
  kills?: number;
  deaths?: number;
  assists?: number;
}

interface InfoType extends Kda {}

type Props = {
  info: InfoType;
  isRed?: boolean;
}

const KdaFraction: React.FC<Props> = ({ info, isRed }) => {
  return (
    <ScKdaFraction>
      <span className='digit kills'>
        {info.kills || info.kill || 0}
      </span>
      <span className='slash'> / </span>
      <span className={`digit deaths ${isRed && 'reddish'}`}>
        {info.deaths || info.death || 0}
      </span>
      <span className='slash'> / </span>
      <span className='digit assists'>
        {info.assists || info.assist || 0}
      </span>
    </ScKdaFraction>
  )
}

const ScKdaFraction = styled.div` 
  .digit { ${s(`c(${theme.gunmetal}); bold;`)}
    &.reddish ${s(`c(${theme.reddish})`)}
  }

  .slash ${s(`c(${theme.warmGrey3})`)}
`

export default KdaFraction