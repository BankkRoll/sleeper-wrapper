export interface NFLState {
    week: number;
    season_type: string;
    season_start_date: string;
    season: string;
    previous_season: string;
    leg: number;
    league_season: string;
    league_create_season: string;
    display_week: number;
}
export declare const getNFLState: (sport: string) => Promise<NFLState>;
