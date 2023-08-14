export interface TrendingPlayer {
    player_id: string;
    count: number;
}
export declare const getTrendingPlayers: (sport: string, type: string, lookback_hours?: number, limit?: number) => Promise<TrendingPlayer[]>;
