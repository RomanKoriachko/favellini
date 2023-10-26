import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "Default";

export const sortingReducer = createSlice({
    name: "sortingState",
    initialState,
    reducers: {
        setSortingTitleState: (state, action) => {
            return action.payload;
        },
    },
});

export const { setSortingTitleState } = sortingReducer.actions;
export default sortingReducer.reducer;
