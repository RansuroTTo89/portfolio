import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/api";

const LIMIT = 12;
const MAX_TOTAL_FOR_PAGINATION = 60;

export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { skip, sortBy, order } = getState().products;
      const data = await fetchProducts({ limit: LIMIT, skip, sortBy, order });
      return data;
    } catch (err) {
      return rejectWithValue(err.message || "Не удалось загрузить товары");
    }
  }
);

const initialState = {
  items: [],
  total: 0,
  limit: LIMIT,
  skip: 0,
  sortBy: "",
  order: "asc",
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage(state, action) {
      state.skip = action.payload * state.limit;
    },
    setSort(state, action) {
      const { sortBy, order } = action.payload;
      state.sortBy = sortBy;
      state.order = order;
      state.skip = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
        state.total = Math.min(action.payload.total, MAX_TOTAL_FOR_PAGINATION);
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка загрузки данных";
      });
  },
});

export const { setPage, setSort } = productsSlice.actions;
export default productsSlice.reducer;
