import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode | React.ReactNode[]
  handleClickOutside: () => void;
}

const useClickOutside = (ref: React.RefObject<HTMLSpanElement>, handler: Function) => {
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler()
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref])
}

const RClickOutside: React.FC<Props> = ({ children, handleClickOutside }) => {
  const ref = useRef<HTMLSpanElement>(null);
  useClickOutside(ref, handleClickOutside);

  return (
    <ScClickOutside ref={ref}>
      {children}
    </ScClickOutside>
  )
}

const ScClickOutside = styled.span`
  
`

export default RClickOutside