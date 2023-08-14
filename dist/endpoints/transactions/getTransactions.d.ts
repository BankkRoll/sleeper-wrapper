interface DraftPick {
    season: string;
    round: number;
    roster_id: number;
    previous_owner_id: number;
    owner_id: number;
}
interface WaiverBudget {
    sender: number;
    receiver: number;
    amount: number;
}
export interface Transaction {
    type: string;
    transaction_id: string;
    status_updated: number;
    status: string;
    settings: {
        waiver_bid?: number;
    } | null;
    roster_ids: number[];
    metadata: Record<string, any> | null;
    leg: number;
    drops: Record<string, number> | null;
    draft_picks: DraftPick[];
    creator: string;
    created: number;
    consenter_ids: number[];
    adds: Record<string, number> | null;
    waiver_budget: WaiverBudget[];
}
export declare const getTransactions: (league_id: string, round: string) => Promise<Transaction[]>;
export {};
