export interface Matchup {
    starters: string[];
    roster_id: number;
    players: string[];
    matchup_id: number;
    points: number;
    custom_points: number | null;
}
export declare const getMatchupsInLeague: (leagueId: string, week: string) => Promise<Matchup[]>;
