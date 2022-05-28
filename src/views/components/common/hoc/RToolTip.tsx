import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import s, { theme } from '@/styles';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  message: string;
  className?: string;
}

const RTooltip: React.FC<Props> = ({ children, message, className }) => {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <ScRTooltip 
      ref={ref}
      className={className}
    >
      {children}
      <p className='tooltip'>{message}</p>
    </ScRTooltip>
  )
}

const ScRTooltip = styled.span` ${s('rel;')}
  .tooltip {
    ${s(`abs; alt(-100%,-100%); min-w(150); h(40); p(7); c(#fff); bgc(${theme.darkGrey}); fs(12,16); br(4); z(10);`)};
    display: none;
  }

  &:hover {
    .tooltip {
      display: block;
    }
  }
`

export default RTooltip