import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles'

type Props = {
  previousTiers: Undefinable<PrevTierType[]>
}

const HeaderPrevTiers: React.FC<Props> = ({ previousTiers }) => {

  const setPrevTierTags = () => {
    return previousTiers?.sort((a,b) => b.season - a.season).map(tier => 
      <span className='tier' key={tier.season}>
        <b>S{tier.season}</b> {tier.tier}
      </span>
    )
  }

  return (
    <ScHeaderPrevTiers>
      {setPrevTierTags()}
    </ScHeaderPrevTiers>
  )
}

const ScHeaderPrevTiers = styled.div` ${s('flex; gap(7); pl(11); ')}
  .tier ${s(`p(3,5); bgc(${theme.silver}); -a(${theme.silver2}); fs(11); br(2);`)} 
`;

export default HeaderPrevTiers