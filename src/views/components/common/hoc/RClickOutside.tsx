import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode | React.ReactNode[]
  handleClickOutside: () => void;
}

const useClickOutside = (ref: React.RefObject<HTMLDivElement>, handler: () => void) => {
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler()
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref])
}

const RClickOutside: React.FC<Props> = ({ children, handleClickOutside }) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, handleClickOutside);

  return (
    <ScClickOutside ref={ref}>
      {children}
    </ScClickOutside>
  )
}

const ScClickOutside = styled.div`
  
`

export default RClickOutside