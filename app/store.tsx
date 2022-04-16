import { configureStore } from "@reduxjs/toolkit";
import ActiveTabReducer from "../features/activeTab/ActiveTabSlice";
import SearchBarReducer from "../features/searchBar/SearchBarSlice";

export const store = configureStore({
  reducer: {
    activeTab: ActiveTabReducer,
    searchBar: SearchBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
