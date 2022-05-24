import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles'
import { setComma } from '@/utils/number';

type Props = {
  summoner: SummonerDto;
}

const HeaderProfile: React.FC<Props> = ({ summoner }) => {
  const setLadderRank = () => {
    return (
      <>
        레더 랭킹 <b>{setComma(summoner?.ladderRank.rank as number)}</b>위 
        (상위 {summoner?.ladderRank.rankPercentOfTop}%)
      </>
    )
  }

  return (
    <ScHeaderProfile>
      <div className='image-wrapper'>
        <img src={summoner?.profileImageUrl} className='profile-image' alt='profile-image' />
        <img src={summoner?.profileBorderImageUrl} className='profile-border' alt='profile-border' />
        <span className='level'>{summoner?.level}</span>
      </div>
      <div className='info-wrapper'>
        <h4 className='nickname'>{summoner?.name}</h4>
        <p className='ladder-rank'>{setLadderRank()}</p>
      </div>
    </ScHeaderProfile>
  )
}

const ScHeaderProfile = styled.div` ${s('flex; mt(6);')}
  .image-wrapper { ${s('rel; wh(120); p(11);')}
    img {
      &.profile-image ${s('hf;')}
      &.profile-border ${s('abs; alt(0,0); ')}
    }
    .level {
      ${s(`abs; alb(50%,-6); t-xc; flex-center; wh(44,24); bgc(${theme.dark}); c(${theme.dullYellow}); fs(14,14);`)}
      border: 1px solid;
      &:after {
        ${s('abs; alt(-1,-1); wh(46,26);')}
        background: linear-gradient(#f6e08f, #ca9a2c);
      }
    }
  }

  .info-wrapper { ${s('ml(17); pt(11);')}
    .nickname ${s(`c(${theme.charcoal}); fs(20);`)}
    .ladder-rank ${s(`mt(4); c(${theme.slateGrey}); fs(11);`)}
  }
`

export default HeaderProfile