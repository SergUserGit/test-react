import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

export const advertsSlice = createSlice({
  name: "catalogauto",
  initialState: {
    adverts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdverts.fulfilled, (state, action) => {
      state.adverts.items = action.payload;
      state.adverts.isLoading = false;
      state.adverts.error = null;
    });
    builder.addCase(fetchAdverts.pending, (state) => {
      state.adverts.isLoading = true;
    });
    builder.addCase(fetchAdverts.rejected, (state, action) => {
      state.adverts.isLoading = false;
      state.adverts.error = action.payload;
    });
  },
});

export const advertsReducer = advertsSlice.reducer;
