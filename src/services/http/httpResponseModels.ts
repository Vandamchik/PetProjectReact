export interface IUser {
    email: string;
    id: string;
    name: string;
    isActivated: boolean;
}

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}
