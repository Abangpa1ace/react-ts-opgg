export const strSplit = (str: string, cr = ' ') => {
  return str.split(cr).map(s => s.trim()).filter(is => is);
}

export const arrShuffle = (arr: any[]) => {
  return arr.sort(() => Math.random() - 0.5)
}