export interface UserResponse {
    username: string;
    user_id: string;
    displayName: string;
    avatar: string;
}
export declare const fetchUser: (usernameOrId: string) => Promise<UserResponse>;
