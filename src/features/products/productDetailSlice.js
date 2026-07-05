import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductById } from "../../services/api";

export const loadProductById = createAsyncThunk(
  "productDetail/loadProductById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await fetchProductById(id);
      return data;
    } catch (err) {
      return rejectWithValue(err.message || "Не удалось загрузить товар");
    }
  }
);

const initialState = {
  item: null,
  status: "idle",
  error: null,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    clearProduct(state) {
      state.item = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProductById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
      })
      .addCase(loadProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка загрузки товара";
      });
  },
});

export const { clearProduct } = productDetailSlice.actions;
export default productDetailSlice.reducer;
