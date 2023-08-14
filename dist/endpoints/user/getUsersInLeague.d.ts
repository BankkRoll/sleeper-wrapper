export interface LeagueUser {
    user_id: string;
    username: string;
    display_name: string;
    avatar: string;
    metadata: {
        team_name: string;
    };
    is_owner: boolean;
}
export declare const getUsersInLeague: (leagueId: string) => Promise<LeagueUser[]>;
