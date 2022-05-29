import React from 'react'
import styled from 'styled-components'
import s from '@/styles';
import MatchGameSummary from './MatchGameSummary';
import { STATUS_STYLES } from '@/constants';
import { getStatus } from '@/utils/data';

type Props = {
  match: MatchGameType
}

const MatchGameItem: React.FC<Props> = ({ match }) => {
  const style = STATUS_STYLES[getStatus(match)];

  return (
    <ScMatchGameItem style={{ background: style.background, border: `1px solid ${style.border}` }}>
      <MatchGameSummary match={match} />
    </ScMatchGameItem>
  )
}

const ScMatchGameItem = styled.div`
  ${s('mb(16);')}
`

export default MatchGameItem