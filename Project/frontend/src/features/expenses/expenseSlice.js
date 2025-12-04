// features/expenses/expenseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../apiClient';

// GET /api/expenses
export const fetchExpenses = createAsyncThunk(
  'expenses/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await apiClient.get('/api/expenses');
      return res.data;
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || 'Failed to fetch expenses';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// POST /api/expenses
export const createExpense = createAsyncThunk(
  'expenses/create',
  async (data, thunkAPI) => {
    try {
      const res = await apiClient.post('/api/expenses', data);
      return res.data;
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || 'Failed to create expense';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// DELETE /api/expenses/:id
export const deleteExpense = createAsyncThunk(
  'expenses/delete',
  async (id, thunkAPI) => {
    try {
      await apiClient.delete(`/api/expenses/${id}`);
      return id;
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || 'Failed to delete expense';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchExpenses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // create
      .addCase(createExpense.pending, (state) => {
        state.loading = true;
      })
      .addCase(createExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // delete
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.items = state.items.filter((e) => e._id !== action.payload);
      });
  },
});

export default expenseSlice.reducer;
