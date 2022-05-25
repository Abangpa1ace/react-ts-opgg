import { theme } from "@/styles";
import { setDecimal } from "./number";

export const setTierRankText = (tierRank: TierType) => {
  return `${tierRank?.tier}${!['Master', 'Grandmaster', 'Challenger'].includes(tierRank?.tier) ? ' ' + tierRank?.shortString[1] : ''}`
}

export const setWinRate = (wins: number | undefined, losses: number | undefined, defaultColor?: string) => {
  if (wins === undefined || losses === undefined) return null;
  const value = Math.floor(wins / (wins + losses) * 100)
  const color = value >= 60 ? theme.reddish : defaultColor || theme.brownishGrey;

  return { value, text: `${value}%`, color }
}

export const setKdaScore = (data: any, defaultColor?: string, floor = 2) => {
  if (!data) return null
  const value = setDecimal(data.kills + data.assists, data.deaths, floor);

  const color = (() => {
    switch (true) {
      case +value >= 5:
        return theme.yellowOchre;
      case +value >= 4:
        return theme.bluish;
      case +value >= 3:
        return theme.blueyGreen;
      default:
        return defaultColor || theme.brownishGrey;
    }
  })()

  return { value, text: `${value}:1 평점`, color }
}