import { AxiosResponse } from "axios";

import $api from './authHttpInterceptors.ts';
import { IAuthResponse } from "./httpResponseModels.ts";

export class AuthService {
    static async login( email: string, password: string ): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/auth/login', { email, password })
    }

    static async registration(email: string, password: string, name: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/auth/registration', { email, password, name })
    }

    static async logout(): Promise<AxiosResponse<void>> {
        return $api.post('/auth/logout')
    }
}
