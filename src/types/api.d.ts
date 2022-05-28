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
type StatGeneralType = {
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
}

type StatType = {
  general: StatGeneralType,
  ward: {
    sightWardsBought: number;
    visionWardsBought: number;
  }
}

interface GameType {
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
  mapInfo: null | any;  // TODO: any
  mmr: number | null;
  needRenew: boolean;
  peak: string[];
  spells: { imageUrl: string }[];
  stats: StatType;
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
}

interface MatchGameType extends GameType {
  teams: TeamType[]
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

/** getSummonerMatcheDetails */

type TeamChampion = {
  champion: {
    imageUrl: string;
    level: number;
  }
  summonerId: string;
  summonerName: string;
}

type TeamType = {
  teamId: number;
  players: TeamChampion[]
}

type SummonerMatchDetailDto = {
  gameId: string;
  teams: TeamType[]
} | null

type SummonerMatchDetailsDto = SummonerMatchDetailDto[];

/** getItemsInfo */

type ItemInfoType = {
  colloq: "string",
  description: "string",
  gold: {
    base: number,
    purchasable: boolean, 
    total: number,
    sell: number,
  },
  image: {
    full: string,
    group: string,
    h: number,
    sprite: string,
    w: number,
    x: number,
    y: number,
  },
  into: string[],
  maps: { [K in number]: boolean },
  name: string,
  plaintext: string,
  stats: { [K in string]: number },
  tags: string[],
}

type ItemsInfoDto = { [K in number]: ItemInfoType }