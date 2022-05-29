import { theme } from "@/styles"

export const POSITIONS: StringObject = {
  'TOP': '탑',
  'JNG': '정글',
  'MID': '미드',
  'ADC': '원딜',
  'SUP': '서폿',
}

export const TAB_LIST: TabType = {
  '전체': '전체',
  '솔랭': '솔로랭크',
  '자유 5:5 랭크': '자유랭크', 
  '일반': '일반게임',
  '무작위 총력전': '무작위 총력전',
}

export const STATUS_STYLES = {
  win: {
    background: theme.lightBlueGrey,
    subBackgroud: theme.perryWinkle,
    placeholderBackground: theme.greyBlue,
    border: theme.lightGreyBlue,
    subBorder: theme.coolBlue,
    thirdBorder: theme.lightGreyBlue2,
    color: theme.uglyBlue,
  },
  lose: {
    background: theme.pinkishGrey,
    subBackgroud: theme.pinkishTan,
    placeholderBackground: theme.pinkishGrey4,
    border: theme.pinkishGrey2,
    subBorder: theme.brownishPink,
    thirdBorder: theme.pinkishGrey3,
    color: theme.scarlet,
  },
  drop: {
    background: theme.greyish,
    subBackground: theme.greyish2,
    placeholderBackground: theme.warmGrey4,
    border: theme.greyish2,
    subBorder: theme.warmGrey2,
    thirdBorder: theme.warmGrey2,
    color: theme.black2,
  },
}

export const KILLS_TEXT: StringObject = {
  'Double Kill': '더블킬',
  'Triple Kill': '트리플킬',
  'Quadra Kill': '쿼드라킬',
  'Penta Kill': '펜타킬',
}
