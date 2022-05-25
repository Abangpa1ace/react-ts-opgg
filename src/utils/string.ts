export const strSplit = (str: string, cr = ' ') => {
  return str.split(cr).map(s => s.trim()).filter(is => is);
}