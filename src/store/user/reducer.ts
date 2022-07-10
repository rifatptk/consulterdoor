import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  user: null,
};

export const commonSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

const { saveUser } = commonSlice.actions;
const userReducer = commonSlice.reducer;

export { saveUser, userReducer };
