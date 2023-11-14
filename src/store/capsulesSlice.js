import { createSlice } from '@reduxjs/toolkit';

const capsulesSlice = createSlice({
    name: 'capsules',
    initialState: {
        capsules: [],
    },
    reducers: {
        setCapsules: (state, action) => {
            state.capsules = action.payload;
        },
    },
});

export const { setCapsules } = capsulesSlice.actions;
export default capsulesSlice.reducer;