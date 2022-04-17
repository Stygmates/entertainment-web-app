import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Tile, TileGroup } from "../../components/Tile";
import data from "../../assets/data.json";

export interface TilesState {
  value: TileGroup | null;
}

const initialState: TilesState = {
  value: data,
};

export const TilesSlice = createSlice({
  name: "Tiles",
  initialState,
  reducers: {
    setTiles: (state, action: PayloadAction<TileGroup | null>) => {
      state.value = action.payload;
    },
    toggleBookmark: (state, action: PayloadAction<string>) => {
      if (state.value != null) {
        state.value = state.value.map((tile: Tile) => {
          if (tile.title === action.payload) {
            return { ...tile, isBookmarked: !tile.isBookmarked };
          } else {
            return tile;
          }
        });
      }
    },
  },
});

export const { setTiles, toggleBookmark } = TilesSlice.actions;

export const selectTiles = (state: RootState) => state.tiles.value;

export default TilesSlice.reducer;
