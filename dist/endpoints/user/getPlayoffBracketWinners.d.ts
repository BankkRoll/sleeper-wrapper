export interface BracketMatchup {
    r: number;
    m: number;
    t1: number | {
        w: number;
    };
    t2: number | {
        l: number;
    };
    w: number | null;
    l: number | null;
    t1_from?: {
        w: number;
    } | {
        l: number;
    };
    t2_from?: {
        w: number;
    } | {
        l: number;
    };
    p?: number;
}
export declare const getPlayoffBracketWinners: (league_id: string) => Promise<BracketMatchup[]>;
