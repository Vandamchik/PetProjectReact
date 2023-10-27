import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuthResponse } from '../../../../services/http/httpResponseModels.ts';
import { fetchRegistrationCreator } from '../creator/fetchRegistrationCreator.ts';
import { fetchLoginCreator } from '../creator/fetchLoginCreator.ts';
import { fetchLogoutCreator } from '../creator/fetchLogoutCreator.ts';
import { fetchCheckAuthCreator } from '../creator/fetchCheckAuthCreator.ts';
import { IAuthInitialState } from "../module/authModels.ts";

const initialState: IAuthInitialState = {
    user: {
        refreshToken: '',
        accessToken: '',
        user: {
            email: '',
            name: '',
            id: '',
            isActivated: false
        }
    },
    isLoading: false,
    error: '',
    isLogin: false
}


export const authenticationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRegistrationCreator.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
            state.isLoading = false;
            state.isLogin = false;
            state.error = '';
            state.user = action.payload;
        },
        [fetchRegistrationCreator.pending.type]: (state) => {
            state.isLoading = true;
            state.isLogin = false;
            state.error = '';
            state.user = {} as IAuthResponse;
        },
        [fetchRegistrationCreator.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.isLogin = false;
            state.error = action.payload;
            state.user = {} as IAuthResponse;
        },
        [fetchLoginCreator.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
            state.isLoading = false;
            state.isLogin = true;
            state.error = '';
            state.user = action.payload;
        },
        [fetchLoginCreator.pending.type]: (state) => {
            state.isLoading = true;
            state.isLogin = false;
            state.error = '';
            state.user = {} as IAuthResponse;
        },
        [fetchLoginCreator.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.isLogin = false;
            state.error = action.payload;
            state.user = {} as IAuthResponse;
        },
        [fetchLogoutCreator.fulfilled.type]: (state) => {
            state.isLoading = false;
            state.isLogin = false;
            state.error = '';
            state.user = {} as IAuthResponse
        },
        [fetchLogoutCreator.pending.type]: (state) => {
            state.isLoading = true;
            state.isLogin = false;
            state.error = '';
            state.user = {} as IAuthResponse;
        },
        [fetchLogoutCreator.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.isLogin = false;
            state.error = action.payload;
            state.user = {} as IAuthResponse;
        },
        [fetchCheckAuthCreator.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
            state.isLoading = false;
            state.isLogin = true;
            state.error = '';
            state.user = action.payload;
        },
        [fetchCheckAuthCreator.pending.type]: (state) => {
            state.isLoading = true;
            state.isLogin = false;
            state.error = '';
            state.user = {} as IAuthResponse;
        },
        [fetchCheckAuthCreator.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.isLogin = false;
            state.error = action.payload;
            state.user = {} as IAuthResponse;
        },
    }
})

export default authenticationSlice.reducer;
