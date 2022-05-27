import { KILLS_TEXT } from '@/constants';
import { theme } from '@/styles';

type GameStatus = 'win' | 'lose' | 'drop'

export const getStatus = (match: MatchGameType): GameStatus => !match.mmr ? 'drop' : match.isWin ? 'win' : 'lose'

export const getSuperTags = (info: StatGeneralType): { text: string, background: string, borderColor: string }[] => {
  let result = [];

  for (let key in info) {
    if (key === 'largestMultiKillString' && !!info[key]) result.push({ text: KILLS_TEXT[info[key]], background: theme.tomato, borderColor: theme.reddish2 })
    else if (key === 'opScoreBadge' && !!info[key]) result.push({ text:info[key], background: theme.amethyst, borderColor: theme.warmPurple })
  }

  return result;
} 