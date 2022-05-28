import React from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';

type Props = {
  message: string;
  style?: { left: number, top: number };
  type?: string;
}

const TooltipBox: React.FC<Props> = ({ message, style, type }) => {
  return (
    <ScTooltipBox className={`${type}`} style={style}>
      {message}
    </ScTooltipBox>
  )
}

const ScTooltipBox = styled.div`
  ${s(`abs; max-w(150); p(5,8); bgc(${theme.darkGrey}); c(#fff); fs(12,16); br(4); z(1);`)}
  transform: translateX(calc(-50% + 12px));

  &:after ${s(`cnt(''); abs; wh(0);`)}

  &.top {
    &:after ${s(`alb(50%,-6); -l(7, transparent); -r(7, transparent); -t(7, ${theme.darkGrey}); t-xc;`)}
  }
  
  &.bottom {
    &:after ${s(`alt(50%,-6); -l(7, transparent); -r(7, transparent); -b(7, ${theme.darkGrey}); t-xc;`)}
  }
`

export default TooltipBox