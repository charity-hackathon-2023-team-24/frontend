import { createSlice } from '@reduxjs/toolkit';
import { fears } from '../../helpers/fearIcons';

const SCORE_STEP = 25;

const initialState = {
  fears,
  clicks: 0,
  gameOn: false,
  gameOver: false,
  filtred: fears,
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
    selectFear: (state, { payload }) => {
      const updated = state.fears.map((el) => {
        if (el.id === payload) {
          el.selected = true;
        }
        return el;
      });
      state.fears = updated;
    },
    removeFear: (state, { payload }) => {
      state.filtred = state.filtred.filter((el) => el.id !== payload);
    },
  },
});

export const { actions } = gameSlice;
export default gameSlice.reducer;
