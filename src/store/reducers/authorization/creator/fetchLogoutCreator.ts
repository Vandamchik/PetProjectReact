import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '../../../../services/http/AuthService.ts';

export const fetchLogoutCreator = createAsyncThunk(
    'authorization/fetchLogoutCreator',
    async (_, {rejectWithValue}) => {
        try {
            // const response =
                await AuthService.logout();
            localStorage.removeItem('authToken');
            // return response
        } catch (e) {
            rejectWithValue('Logout on server is failure')
        }
    }
)



