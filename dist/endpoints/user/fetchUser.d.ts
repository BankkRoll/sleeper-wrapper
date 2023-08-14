export interface UserResponse {
    username: string;
    userId: string;
    displayName: string;
    avatar: string;
}
export declare const fetchUser: (usernameOrId: string) => Promise<UserResponse>;
