import { IAuthResponse } from "../../../../services/http/httpResponseModels.ts";

export interface IAuthInitialState {
    user: IAuthResponse;
    isLoading: boolean;
    error: string
    isLogin?: boolean;
}

