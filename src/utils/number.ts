export const setComma = (n: number): string => n?.toLocaleString();

export const setDecimal = (child: number | undefined, parent: number | undefined, floor = 1) => {
  if (!child || !parent) return '';
  const point = Math.pow(10, floor)
  return (Math.floor(child / parent * point) / point).toFixed(floor);
}