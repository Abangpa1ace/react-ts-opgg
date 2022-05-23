interface Tier {
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

interface PreviousTier extends Tier {
  season: number;
}

type League = {
  hasResults: true;
  wins: number;
  losses: number;
  tierRank: Tier;
}

type SummonerDto = {
  ladderRank: {
    rank: number;
    rankPercentOfTop: number;
  };
  leagues: League[]
  level: number;
  name: string;
  previousTiers: PreviousTier[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
} | null