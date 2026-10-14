import { configureStore} from '@reduxjs/toolkit';
import { useReducer } from 'react';
import usersReducer from "../features/users/userSlice";


export const store = configureStore({
    reducer:{
        users : usersReducer,
    },
});