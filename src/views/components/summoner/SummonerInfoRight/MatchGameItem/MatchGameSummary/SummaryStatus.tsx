import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import { STATUS_STYLES } from '@/constants';
import { getStatus } from '@/utils/data';
import { getDateTimeDiff } from '@/utils/dateTime';

type Props = {
  match: MatchGameType
}

const statusText = {
  win: '승리',
  lose: '패배',
  drop: '다시하기',
}

const SummaryStatus: React.FC<Props> = ({ match }) => {
  const status = getStatus(match)
  const style = STATUS_STYLES[status];

  return (
    <ScSummaryStatus>
      <p className='status'>{match.gameType}</p>
      <p className='date'>{getDateTimeDiff(match.createDate)}</p>
      <div className='divider' style={{ border: `1px solid ${style.thirdBorder}` }} />
      <p className='status-text' style={{ color: style.color }}>{statusText[status]}</p>
      <p className='time'>{`${match.gameLength}`.slice(0,2)}분 {`${match.gameLength}`.slice(2)}초</p>
    </ScSummaryStatus>
  )
}

const ScSummaryStatus = styled.li` ${s(`flex-column; w(60); tac; c(${theme.greyishBrown});`)}
  p {
    ${s(`fs(11,11);`)}
    &.status ${s(`mb(5); bold;`)}
    &.status-text ${s('mb(5); bold;')}
  }

  .divider ${s(`dib; wh(27,1); my(4);`)}
`

export default SummaryStatus