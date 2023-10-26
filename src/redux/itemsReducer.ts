import { createSlice } from "@reduxjs/toolkit";
import itemsArray from "../pages/CollectionPage/itemsArray";

export type ItemType = {
    id: number;
    type: string;
    kingSize: boolean;
    queenSize: boolean;
    color: string;
    queensPrice: number;
    kingsPrice: number;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    popularity: number;
    inStock: boolean;
};

const initialState: ItemType[] = itemsArray;

export const itemsReducer = createSlice({
    name: "itemsState",
    initialState,
    reducers: {
        setItemsState: (state, action) => {
            return action.payload;
        },
    },
});

export const { setItemsState } = itemsReducer.actions;
export default itemsReducer.reducer;
