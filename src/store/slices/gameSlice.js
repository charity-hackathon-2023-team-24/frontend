import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clicks: 0,
  gameOver: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increment: (state) => {
      console.log('state', state);
      const newClicks = state.clicks + 1;
      console.log('newClicks', newClicks);
      state.clicks = newClicks;
    },
    setGameOver: (state, { payload }) => {
      state.gameOver = payload;
    },
  },
});

export const { actions } = gameSlice;
export default gameSlice.reducer;
