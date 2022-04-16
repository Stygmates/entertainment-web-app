import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface SearchBarState {
  value: string | null;
}

const initialState: SearchBarState = {
  value: null,
};

export const SearchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    setSearchBar: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchBar } = SearchBarSlice.actions;

export const selectSearchBar = (state: RootState) => state.searchBar.value;

export default SearchBarSlice.reducer;
