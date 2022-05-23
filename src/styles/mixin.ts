import { css } from 'styled-components';
import customStyles from './asset';
import { strSplit } from '@/utils/common';

export const container = css`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-left: 2px solid red;
  border-right: 2px solid red;
`;

const s = (styleContext: string) => {
  const styles = strSplit(styleContext, ';').reduce((acc, style) => {
    const s = style.indexOf('(')
    const e = style.lastIndexOf(')')
    let k = s === -1 ? style : style.slice(0,s)
    let v = s === -1 ? null : style.slice(s+1,e)

    const vs = v?.includes('rgb') ? [v] : !!v ? strSplit(v, ',').map(v => +v !== 0 && Number.isInteger(+v) ? `${v}px` : v) : '';
    return acc + customStyles[k](...vs)
  }, '')

  return `{ ${css`${styles}`} }`;
};

export default s;