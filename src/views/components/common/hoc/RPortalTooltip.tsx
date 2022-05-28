import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import TooltipPortal from '../tooltip/TooltipPortal';
import TooltipBox from '@/views/components/common/tooltip/TooltipBox';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  message: string;
  className?: string;
}

type PosType = {
  style: { left: number, top: number };
  type: string;
}

const getPosition = (ref: React.RefObject<HTMLSpanElement>, gap = 5): PosType => {
  const rect = ref.current?.getBoundingClientRect() || { top: 0, left: 0 }
  const h = ref.current?.clientHeight as number
  const isAbove = rect?.top + h/2 <= window.innerHeight / 2
  console.log(isAbove)
  const top = rect.top + (isAbove ? h+gap : -gap);

  return {
    style: { left: rect?.left, top },
    type: isAbove ? 'bottom' : 'top' 
  }
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