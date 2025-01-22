export interface RankingItem {
  volunteerId: string;
  totalHours: number;
  ranking: number;
  nickname: string;
}

export interface RankingResponse {
  volunteer_total_ranking_response: RankingItem[];
  volunteer_monthly_ranking_response: RankingItem[];
  volunteer_weekly_ranking_response: RankingItem[];
}
