import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
  date: { from: '', to: '' },
  status: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setInput: (state, { payload }) => {
      state.input = payload;
    },
    setDate: (state, { payload }) => {
      state.date = payload;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const { actions } = searchSlice;
export default searchSlice.reducer;
