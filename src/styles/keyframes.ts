import { keyframes } from 'styled-components'

export const extendWidth = (length?: number | string) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${length || 'initial'}
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
    opacity: 1
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