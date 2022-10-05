import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getConstructors } from './thunk';
import { TConstructors, TStateTypeConstructors } from './types';

const initialState: TStateTypeConstructors = {
  loading: false,
  constructors: [],
  error: null,
};
const constructorsSlice = createSlice({
  name: 'constructors',
  initialState,
  reducers: {},
  extraReducers: {
    [getConstructors.pending.type]: (state: TStateTypeConstructors) => {
      state.loading = true;
      state.error = null;
    },
    [getConstructors.fulfilled.type]: (
      state: TStateTypeConstructors,
      action: PayloadAction<TConstructors[]>,
    ) => {
      state.loading = false;
      state.constructors = action.payload;
    },
    [getConstructors.rejected.type]: (state: TStateTypeConstructors) => {
      state.loading = false;
      state.error = null;
    },
  },
});

export default constructorsSlice.reducer;
