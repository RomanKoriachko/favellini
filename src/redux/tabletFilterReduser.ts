import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

export const tabletFilterReduser = createSlice({
    name: "tabletFilterReduser",
    initialState,
    reducers: {
        openTabletFilterState: (state) => {
            return "open";
        },
        closeTabletFilterState: (state) => {
            return "";
        },
    },
});

export const { openTabletFilterState, closeTabletFilterState } =
    tabletFilterReduser.actions;
export default tabletFilterReduser.reducer;
