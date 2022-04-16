import { configureStore } from "@reduxjs/toolkit";
import ActiveTabReducer from "../features/activeTab/ActiveTabSlice";

export const store = configureStore({
  reducer: {
    activeTab: ActiveTabReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
