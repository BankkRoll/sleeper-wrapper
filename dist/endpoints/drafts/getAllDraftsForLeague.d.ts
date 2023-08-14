export interface Draft {
    type: string;
    status: string;
    start_time: number;
    sport: string;
    settings: object;
    season_type: string;
    season: string;
    metadata: object;
    league_id: string;
    last_picked: number;
    draft_id: string;
    created: number;
}
export declare const getAllDraftsForLeague: (leagueId: string) => Promise<Draft[]>;
