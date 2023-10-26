import { configureStore } from "@reduxjs/toolkit";
import sortingReducer from "./sortingReducer";
import itemsReducer from "./itemsReducer";
import tabletFilterReduser from "./tabletFilterReduser";
import tabletSortingRedicer from "./tabletSortingReducer";

export const store = configureStore({
    reducer: {
        sortingState: sortingReducer,
        itemsState: itemsReducer,
        tabletFilterState: tabletFilterReduser,
        tabletSortingState: tabletSortingRedicer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
