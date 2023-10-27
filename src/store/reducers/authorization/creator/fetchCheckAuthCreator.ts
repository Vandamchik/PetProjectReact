import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IAuthResponse } from "../../../../services/http/httpResponseModels.ts";
import { ROUTES } from '../../../../utils/consts.ts';

export const fetchCheckAuthCreator = createAsyncThunk(
    'authorization/fetchCheckAuthCreator',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get<IAuthResponse>(`${ROUTES.BASE_API_URL}/auth/refresh`, {
                withCredentials: true
            });
            localStorage.setItem('authToken', response.data.accessToken);
            return response.data;
        } catch (e) {
            rejectWithValue('Authorization failed.Maybe Server side error')
        }
    }
)



