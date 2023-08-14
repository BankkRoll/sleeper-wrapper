export interface Roster {
    starters: string[];
    settings: {
        wins: number;
        waiver_position: number;
        waiver_budget_used: number;
        total_moves: number;
        ties: number;
        losses: number;
        fpts_decimal: number;
        fpts_against_decimal: number;
        fpts_against: number;
        fpts: number;
    };
    roster_id: number;
    reserve: string[];
    players: string[];
    owner_id: string;
    league_id: string;
}
export declare const getRostersInLeague: (leagueId: string) => Promise<Roster[]>;
