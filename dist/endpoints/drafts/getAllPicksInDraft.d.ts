export interface Pick {
    player_id: string;
    picked_by: string;
    roster_id: string;
    round: number;
    draft_slot: number;
    pick_no: number;
    metadata: object;
    is_keeper: any;
    draft_id: string;
}
export declare const getAllPicksInDraft: (draftId: string) => Promise<Pick[]>;
