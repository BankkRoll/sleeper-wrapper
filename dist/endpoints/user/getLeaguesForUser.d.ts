export interface League {
    total_rosters: number;
    status: string;
    sport: string;
    settings: object;
    season_type: string;
    season: string;
    scoring_settings: object;
    roster_positions: string[];
    previous_league_id: string;
    name: string;
    league_id: string;
    draft_id: string;
    avatar: string;
}
export declare const getLeaguesForUser: (userId: string, sport: string, season: string) => Promise<League[]>;
