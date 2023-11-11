import { createSlice } from '@reduxjs/toolkit';

const SCORE_STEP = 25;

const initialState = {
  clicks: 0,
  gameOn: false,
  gameOver: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increment: (state) => {
      const newClicks = state.clicks + SCORE_STEP;
      state.clicks = newClicks;
    },
    setGameOn: (state, { payload }) => {
      state.gameOn = payload;
    },
    setGameOver: (state, { payload }) => {
      state.gameOver = payload;
    },
  },
});

export const { actions } = gameSlice;
export default gameSlice.reducer;
