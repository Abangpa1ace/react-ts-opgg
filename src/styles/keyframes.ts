import { keyframes } from 'styled-components'

export const extendHeight = (length?: number | string) => keyframes`
  from {
    min-height: 0;
  }
  to {
    min-height: ${length || 'initial'}
  }
`

export const slideLeft = keyframes`
  from {
    transform: translateX(50%) scale(.6);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`

export const showHide = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0
  }
  50% {
    opacity: 1
  }
  75% {
    opacity: 1
  }
  100% {
    opacity: 1
  }
`;