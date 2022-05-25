/** getSummonerInfo */
interface TierType {
  division: string
  imageUrl: string
  lp: number
  name: string
  shortString: string
  string: string
  tier: string
  tierDivision: string
  tierRankPoint: number
}

interface PrevTierType extends TierType {
  season: number;
}

type LeagueType = {
  hasResults: true;
  wins: number;
  losses: number;
  tierRank: TierType;
}

type SummonerDto = {
  ladderRank: {
    rank: number;
    rankPercentOfTop: number;
  };
  leagues: LeagueType[]
  level: number;
  name: string;
  previousTiers: PrevTierType[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
} | null

/** getSummonerMosts */
interface ChampionType {
  id: number;
  imageUrl: string;
  key: string;
  losses: number;
  name: string;
  wins: number;
  assists?: number;
  cs?: number;
  deaths?: number;
  games?: number;
  kills?: number;
  rank?: number;
}

type SummonerMostsType = {
  champions: ChampionType[];
  recentWinRate: ChampionType[];
}

type SummonerMostsDto = SummonerMostsType | null

/** getSummonerMatches */
type StatType = {
  general: {
    assist: number;
    contributionForKillRate: string;
    cs: number;
    csPerMin: number;
    death: number;
    goldEarned: number;
    kdaString: string;
    kill: number;
    largestMultiKillString: string;
    opScoreBadge: string;
    totalDamageDealtToChampions: number;
  },
  ward: {
    sightWardsBought: number;
    visionWardsBought: number;
  }
}

type GameType = {
  champion: {
    imageUrl: string;
    level: number;
  }
  createDate: number;
  gameId: string;
  gameLength: number;
  gameType: string;
  isWin: boolean;
  items: { imageUrl: string }[];
  mapInfo: null | any;
  mmr: number;
  needRenew: boolean;
  peak: string[];
  spells: { imageUrl: string }[];
  stats: StatType;
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
}

type PositionType = {
  games: number;
  losses: number;
  position: string;
  positionName: string;
  wins: number;
}

type SummaryType = {
  assists: number;
  deaths: number;
  kills: number;
  losses: number;
  wins: number;
}

type SummonerMatchesType = {
  champions: ChampionType[];
  games: GameType[];
  positions: PositionType[];
  summary: SummaryType;
}

type SummonerMatchesDto = SummonerMatchesType | null;