import { createSlice } from '@reduxjs/toolkit';
import { fearList } from '../../helpers/fearList';

const SCORE_STEP = 25;

const initialState = {
  fears: fearList,
  filtred: fearList,
  clicks: 0,
  gameStarted: false,
  gameOn: false,
  gameOver: false,
  modal: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increment: (state) => {
      const newClicks = state.clicks + SCORE_STEP;
      state.clicks = newClicks;
    },
    setDefaultClicks: (state) => {
      state.clicks = 0;
    },
    setGameOn: (state, { payload }) => {
      state.gameOn = payload;
    },
    setGameOver: (state, { payload }) => {
      state.gameOver = payload;
    },
    setStartGame: (state, { payload }) => {
      state.gameStarted = payload;
    },
    selectFear: (state, { payload }) => {
      const updated = state.fears.map((el) => {
        if (el.id === payload) {
          el.selected = true;
          return el;
        }
        return el;
      });
      state.fears = updated;
    },
    removeSelect: (state) => {
      state.fears = fearList;
      state.filtred = fearList;
    },
    removeFear: (state, { payload }) => {
      state.filtred = state.filtred.filter((el) => el.id !== payload);
    },
    setModal: (state, { payload }) => {
      state.modal = payload;
    },
  },
});

export const { actions } = gameSlice;
export default gameSlice.reducer;
