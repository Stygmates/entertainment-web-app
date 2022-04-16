import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ActiveTabState {
  value: string | null;
}

const initialState: ActiveTabState = {
  value: null,
};

export const activeTabSlice = createSlice({
  name: "activeTab",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
  },
});

export const { setActiveTab } = activeTabSlice.actions;

export const selectActiveTab = (state: RootState) => state.activeTab.value;

export default activeTabSlice.reducer;
