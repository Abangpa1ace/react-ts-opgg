import { setKdaScore } from '@/utils/common'
import KdaFraction from '@/views/components/common/KdaFraction'
import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import { getStatus, getSuperTags } from '@/utils/data';

type Props = {
  match: MatchGameType
}

const SummaryKda: React.FC<Props> = ({ match }) => {
  const kda = Object.entries(match.stats.general).reduce((acc, [k,v]) => ({ ...acc, [`${k}s`]: v }), {})
  const tags = getSuperTags(match.stats.general);
  const status = getStatus(match);

  const setTags = () => {
    return !tags.length || status === 'drop' ? null : (
      <div className='tag-list'>
        {tags.map(tag => <span className='tag' style={{ ...tag }} key={tag.text}>{tag.text}</span>)}
      </div>
    )
  }

  return (
    <ScSummaryKda>
      <KdaFraction info={kda} isRed />
      <p className='score'><b>{setKdaScore(kda)?.value}:1</b> 평점</p>
      {setTags()}
    </ScSummaryKda>
  )
}

const ScSummaryKda = styled.li` ${s('w(80); ml(20);')}
  .score ${s('mt(6); fs(11);')}

  .tag-list { ${s('flex; gap(4); mt(7);')}
    .tag { ${s(`flex-center; p(3,5); br(9); c(${theme.white}); fs(9);`)};
      border: 1px solid;
    }
  }
`

export default SummaryKda