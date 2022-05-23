import { css } from 'styled-components';

type customStylesType = {
  [K: string]: Function;
}

const customStyles: customStylesType = {
  // position
  rel:() => `position: relative;`,
  abs: () => `position: absolute;`,
  fix: () => `position: fixed;`,
  static: () => `position: static;`,
  sticky: () => `position: sticky;`,

  // display
  db: () => `display: block;`,
  dib: () => `display: inline-block;`,
  di: () => `display: inline;`,
  dn: () => `display: none;`,
  cnt: (cnt = 's') => `content: ${cnt};`,

  // display: flex
  flex: () => `display: flex;`,
  'inline-flex': () => `display: inline-flex;`,
  'flex-jc': (jc = 'center') => `justify-content: ${jc};`,
  'flex-ai': (ai = 'center') => `align-items: ${ai};`,
  'flex-dr': (dr = 'row') => `flex-direction: ${dr};`,
  'flex-wrap': (wrap = 'wrap') => `display: flex; flex-wrap: ${wrap}`,
  gap: (g: string) => `gap: ${g};`,
  'flex-center': () => `display: flex; justify-content: center; align-items: center;`,
  'flex-column': () => `display: flex; justify-content: center; align-items: center; flex-direction: column;`,

  // width, height
  wh: (w: string, h?: string) => `width: ${w}; height: ${h || w};`,
  w: (w = '100%') => `width: ${w};`,
  wf: () => `width: 100%;`,
  'min-w': (w = '100%') => `min-width: ${w};`,
  'max-w': (w = '100%') => `max-width: ${w};`,
  'calc-w': (v1: string, v2: string) => `width: calc(${v1} - ${v2})`,
  h: (h: string) => `height: ${h};`,
  hf: () => `height: 100%;`,
  'min-h': (h = '100%') => `min-height: ${h};`,
  'max-h': (h = '100%') => `max-height: ${h};`,

  // padding
  p: (pt: string, pr='', pb='', pl='') => `padding: ${pt} ${pr} ${pb} ${pl};`,
  pt: (p: string) => `padding-top: ${p};`,
  pb: (p: string) => `padding-bottom: ${p};`,
  pl: (p: string) => `padding-left: ${p};`,
  pr: (p: string) => `padding-right: ${p};`,
  px: (p: string) => `padding-left: ${p}; padding-right: ${p};`,
  py: (p: string) => `padding-top: ${p}; padding-bottom: ${p};`,

  // margin
  m: (mt: string, mr='', mb='', ml='') => `margin: ${mt} ${mr} ${mb} ${ml};`,
  mt: (m: string) => `margin-top: ${m};`,
  mb: (m: string) => `margin-bottom: ${m};`,
  ml: (m: string) => `margin-left: ${m};`,
  mr: (m: string) => `margin-right: ${m};`,
  mx: (m: string) => `margin-left: ${m}; margin-right: ${m};`,
  my: (m: string) => `margin-top: ${m}; margin-bottom: ${m};`,
  mc: () => `margin: 0 auto;`,

  // absolute position
  at: (t = '0') => `top: ${t};`,
  ab: (b = '0') => `bottom: ${b};`,
  al: (l = '0') => `left: ${l};`,
  ar: (r = '0') => `right: ${r};`,
  alt: (l='0', t='0') => `left: ${l}; top: ${t};`,
  alb: (l='0', b='0') => `left: ${l}; bottom: ${b};`,
  art: (r='0', t='0') => `right: ${r}; top: ${t};`,
  arb: (r='0', b='0') => `right: ${r}; bottom: ${b};`,
  ac: () => `left: 50%; top: 50%;`,

  // visibility
  visible: () => `visibility: visible;`,
  hidden: () => `visibility: hidden;`,

  // background, color
  bgc: (bgc: string): string => `background-color: ${bgc};`,
  c: (c: string): string => `color: ${c};`,
  fill: (c: string) => `fill: ${c};`,
  stroke: (c: string) => `stroke: ${c};`,

  // border
  '-a': (c: string|null, t = '1px') => `border: ${c ? `${t} solid ${c}` : '0'};`,
  '-t': (c: string|null, t = '1px') => `border-top: ${c ? `${t} solid ${c}` : '0'};`,
  '-b': (c: string|null, t = '1px') => `border-bottom: ${c ? `${t} solid ${c}` : '0'};`,
  '-l': (c: string|null, t = '1px') => `border-left: ${c ? `${t} solid ${c}` : '0'};`,
  '-r': (c: string|null, t = '1px') => `border-right: ${c ? `${t} solid ${c}` : '0'};`,

  // font-size
  fs: (fs: string, lh = '1'): string => `font-size: ${fs}; line-height: ${lh};`,
  lh: (lh: string) => `line-height: ${lh};`,
  ls: (ls: string) => `letter-spacing: ${ls};`,
  ti: (ti: string) => `text-indent: ${ti};`,

  // font-weight
  fw: (fw = '400') => `font-weight: ${fw};`,
  bold: () => `font-weight: bold;`,
  td: (d: string) => `text-decoration: ${d};`,
  underline: () => `text-decoration: underline;`,

  // text-align, vertical-align, float
  ta: (ta: string) => `text-align: ${ta};`,
  tac: () => `text-align: center;`,
  tal: () => `text-align: left;`,
  tar: () => `text-align: right;`,
  va: (va: string) => `vertical-align: ${va};`,
  vat: () => `vertical-align: top;`,
  vam: () => `vertical-align: middle;`,
  vab: () => `vertical-align: bottom;`,
  fl: () => `float: left;`,
  fr: () => `float: right;`,

  // border-radius
  br: (br = '4px') => `border-radius: ${br};`,
  'br-t': (br = '4px') => `border-radius: ${br} ${br} 0 0;`,
  'br-b': (br = '4px') => `border-radius: 0 0 ${br} ${br};`,
  'br-l': (br = '4px') => `border-radius: ${br} 0 0 ${br};`,
  'br-r': (br = '4px') => `border-radius: 0 ${br} ${br} 0;`,

  // transform
  't-x': (t: string) => `transform: translateX(${t});`,
  't-y': (t: string) => `transform: translateY(${t});`,
  't-xy': (tx: string, ty: string) => `transform: translateX(${tx}) translateY(${ty});`,
  't-xc': () => `position: absolute; left: 50%; transform: translateX(-50%);`,
  't-yc': () => `position: absolute; top: 50%; transform: translateY(-50%);`,
  't-xyc': () => `transform: translateX(50%) translateY(50%);`,
  't-r': (t: string) => `transform: rotate(${t});`,
  't-s': (t: string) => `transform: scale(${t});`,
  't-sx': (t: string) => `transform: scaleX(${t});`,
  't-sy': (t: string) => `transform: scaleY(${t});`,

  // overflow
  overflow: (of = 'visible') => `overflow: ${of};`,
  crop: () => `overflow: hidden;`,
  autoScroll: () => `overflow: auto;`,
  scroll: () => `overflow: scroll;`,
  ellipsis: (line: string) => !line
    ? `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`
    : `overflow: hidden; text-after-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ${line};`,

  // etc
  filter: (type: FilterType, v: string) => `${type}: ${v};`,
  pointer: () => `cursor: pointer;`,
  o: (o: string) => `opacity: ${o};`,
  z: (z: string) => `z-index: ${z};`,

  // animations
  trans: (time = '0.3s', target = 'all', type = 'ease') => `transition: ${target} ${time} ${type}`,
}

export default customStyles;