import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import TooltipPortal from '../tooltip/TooltipPortal';
import TooltipBox from '@/views/components/common/tooltip/TooltipBox';
import { getPosition, PosType } from '@/utils/hoc';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  message: string;
  className?: string;
}

const RPortalTooltip: React.FC<Props> = ({ children, message, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [show, setShow] = useState<boolean>(false);
  const pos = useRef<PosType | null>(null)

  const handleMouseOver = () => {
    pos.current = getPosition(ref);
    setShow(true)
  }

  return (
    <ScRPortalTooltip
      ref={ref}
      onMouseOver={handleMouseOver}
      onMouseLeave={() => setShow(false)}
      className={className}
    >
      {children}
      {show && 
        <TooltipPortal>
          <TooltipBox message={message} style={pos.current?.style} type={pos.current?.type} />
        </TooltipPortal>
      }
    </ScRPortalTooltip>
  )
}

const ScRPortalTooltip = styled.span`
`

export default RPortalTooltip