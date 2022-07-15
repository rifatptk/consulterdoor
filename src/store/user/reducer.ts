import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  user: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

const { saveUser } = userSlice.actions;
const userReducer = userSlice.reducer;

export { saveUser, userReducer };
