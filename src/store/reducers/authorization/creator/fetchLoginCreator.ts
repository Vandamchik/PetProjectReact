import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '../../../../services/http/AuthService.ts';

export const fetchLoginCreator = createAsyncThunk(
    'authorization/fetchLoginCreator',
    async (obj: {email: string, password: string}, {rejectWithValue}) => {
        try {
            const response = await AuthService.login(obj.email, obj.password );
            localStorage.setItem('authToken', response.data.accessToken);
            return response.data;
        } catch (e) {
            rejectWithValue('Can\'t login with this credentials or server side error')
        }
    }
)



