import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';
import { getStatus } from '@/utils/data';
import { STATUS_STYLES } from '@/constants';
import RPortalTooltip from '@/views/components/common/hoc/RPortalToolTip';

type Props = {
  match: MatchGameType
}

const SummaryItems: React.FC<Props> = ({ match }) => {
  const style = STATUS_STYLES[getStatus(match)];
  let buyItems = match.items.slice(0,-1);
  const wardItem = match.items[match.items.length - 1];

  const setItems = () => {
    return Array.from({ length: 6 }, (_,i) => i).map(i => {
      const item = buyItems[i];
      return item 
        ? <RPortalTooltip message={'hihihihihihihihihihi!'} key={item.imageUrl + i} className='image-item'>
            <img src={item.imageUrl} />
          </RPortalTooltip>
        : <span className='image-item placeholder' style={{ background: style.placeholderBackground }} key={'no-item' + i} />
    })
  }

  return (
    <ScSummaryItems>
      <div className='item-images'>
        {setItems()}
        <img src={wardItem?.imageUrl} className='image-item' />
        <span className='image-item item-logo' style={{ background: style.color}}>Item</span>
      </div>
      <p className='ward-count'>
        <span className='ward-logo' style={{ background: style.color}}>W</span>
        <span className='text'>제어 와드 {match.stats.ward.visionWardsBought}</span>
      </p>
    </ScSummaryItems>
  )
}

const ScSummaryItems = styled.li` ${s('w(94); ml(26);')}
  .item-images {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;

    .image-item { ${s('wh(22);')}
      img ${s('wf; hf; br(2);')}
      &.item-logo ${s('flex-center; br(50%); fs(7); bold; c(#fff);')}
    }
  }

  .ward-count { ${s(`flex-center; c(${theme.black2}); mt(7); fs(11)`)}
    .ward-logo ${s('flex-center; wh(16); br(50%); mr(4); fs(8); c(#fff); bold;')}
    .text ${s(`c(${theme.black2}); fs(11)`)}
  }
`

export default SummaryItems