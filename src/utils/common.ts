import { theme } from "@/styles";
import { setDecimal } from "./number";

export const strSplit = (str: string, cr = ' ') => {
  return str.split(cr).map(s => s.trim()).filter(is => is);
}

export const setTierRankText = (tierRank: Tier) => {
  return `${tierRank?.tier}${!['Master', 'Grandmaster', 'Challenger'].includes(tierRank?.tier) ? ' ' + tierRank?.shortString[1] : ''}`
}

export const setWinRate = (wins: number, losses: number) => {
  const value = Math.floor(wins / (wins + losses) * 100)
  const color = theme[value > 60 ? 'reddish' : 'brownishGrey']

  return { value, text: `${value}%`, color }
}

export const setKdaScore = ({ kills, deaths, assists }: any, floor = 2) => {
  const value = setDecimal(kills + assists, deaths, 2);

  const colorKey = (() => {
    switch (true) {
      case +value >= 5:
        return 'yellowOchre';
      case +value >= 4:
        return 'bluish';
      case +value >= 3:
        return 'blueyGreen';
      default:
        return 'brownishGrey';
    }
  })()

  return { value, text: `${value}:1 평점`, color: theme[colorKey] }
}