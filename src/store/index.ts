import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authenticationReducer  from './reducers/authorization/slices/authenticationSlice.ts';

const rootReducer = combineReducers({
    authenticationReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        // middleware: (getDefaultMiddleware) => {
            // getDefaultMiddleware({serializableCheck: false}).concat()
        // }
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
