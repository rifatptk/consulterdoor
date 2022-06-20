import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface CommonState {
  isOverlayLoading: boolean;
}

const initialState: CommonState = {
  isOverlayLoading: false
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsOverlayLoading: (state, action: PayloadAction<boolean>) => {
      state.isOverlayLoading = action.payload;
    }
  }
});

const { setIsOverlayLoading } = commonSlice.actions;
const commonReducer = commonSlice.reducer;

export { setIsOverlayLoading, commonReducer };
