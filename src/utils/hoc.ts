// Tooltip Coordinates
export type PosType = {
  style: { left: number, top: number };
  type: string;
}

export const getPosition = (ref: React.RefObject<HTMLSpanElement>, gap = 5): PosType => {
  const rect = ref.current?.getBoundingClientRect() || { top: 0, left: 0 }
  const h = ref.current?.clientHeight as number
  const isAbove = rect?.top + h/2 <= window.innerHeight / 2
  const top = rect.top + (isAbove ? h+gap : -gap);
  // 좌우, 대각선 조건도 추가하면 좋을듯?

  return {
    style: { left: rect?.left, top },
    type: isAbove ? 'bottom' : 'top' 
  }
}
