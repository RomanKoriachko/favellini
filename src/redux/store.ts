import { configureStore } from "@reduxjs/toolkit";
import sortingReducer from "./sortingReducer";
import itemsReducer from "./itemsReducer";

export const store = configureStore({
    reducer: {
        sortingState: sortingReducer,
        itemsState: itemsReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
