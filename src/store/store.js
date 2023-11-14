import { configureStore } from '@reduxjs/toolkit';
import capsulesSlice from './capsulesSlice';

const store = configureStore({
    reducer: capsulesSlice
});

export default store;