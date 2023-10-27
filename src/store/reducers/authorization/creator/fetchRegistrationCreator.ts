import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '../../../../services/http/AuthService.ts';

export const fetchRegistrationCreator = createAsyncThunk(
    'authorization/fetchRegistrationCreator',
    async (obj: {email: string, password: string, name: string}, {rejectWithValue}) => {
        try {
            const response = await AuthService.registration(obj.email, obj.password, obj.name );
            localStorage.setItem('authToken', response.data.accessToken);
            return response.data;
        } catch (e) {
            rejectWithValue('Registration failure. Server side error')
        }
    }
)



