export interface TradedPick {
    season: string;
    round: number;
    roster_id: number;
    previous_owner_id: number;
    owner_id: number;
}
export declare const getTradedPicksInDraft: (draftId: string) => Promise<TradedPick[]>;
