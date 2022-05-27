export const setComma = (n: number): string => n?.toLocaleString();

export const setDecimal = (child: number | undefined, parent: number | undefined, floor = 1) => {
  let fraction = (!child || !parent) ? 0 : child / parent
  
  const point = Math.pow(10, floor)
  return (Math.floor(fraction * point) / point).toFixed(floor);
}