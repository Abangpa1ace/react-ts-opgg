import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';

type Props = {
  match: MatchGameType
}

const SummaryChampion: React.FC<Props> = ({ match }) => {
  const championName = match.champion.imageUrl.split('/').pop()?.slice(0,-4);

  return (
    <ScSummaryChampion>
      <div className='images'>
        <img src={match.champion.imageUrl} className='champion-profile' alt='champion-profile' />
        <div className='image-wrapper'>
          {match.spells.map(({ imageUrl }) => <img src={imageUrl} key={imageUrl} className='spell' />)}
        </div>
        <div className='image-wrapper'>
          {match.peak.map((peak) => <img src={peak} key={peak} className='peak' />)}
        </div>
      </div>
      <p className='name'>{championName}</p>
    </ScSummaryChampion>
  )
}

const ScSummaryChampion = styled.li` ${s('w(100); ml(10);')}
  .images { ${s('flex; h(46);')}
    .champion-profile ${s('wh(46); br(50%);')}
    .image-wrapper { ${s('flex-column; gap(2); hf; ml(6);')}
      &:nth-of-type(2) ${s('ml(4);')}

      .spell ${s('wh(22); br(2);')}
      .peak ${s('rel; wh(22); br(50%); bgc(#111); p(1)')}
    }
  }

  .name ${s(`mt(10); c(${theme.greyishBrown}); fs(11);`)}
`

export default SummaryChampion