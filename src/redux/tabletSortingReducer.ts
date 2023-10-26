import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

export const tabletSortingRedicer = createSlice({
    name: "tabletSortingRedicer",
    initialState,
    reducers: {
        openTabletSortingState: (state) => {
            return "open";
        },
        closeTabletSortingState: (state) => {
            return "";
        },
    },
});

export const { openTabletSortingState, closeTabletSortingState } =
    tabletSortingRedicer.actions;
export default tabletSortingRedicer.reducer;
