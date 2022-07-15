import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { consultantService } from '../../services';

const initialState: any = {
  topRatedConsultants: {
    data: [],
    pagination: {},
  },
};

const loadTopRatedConsultants = createAsyncThunk(
  'consultantSlice/loadConsultServices',
  async (data: any) => {
    return consultantService.getConsultants(data);
  }
);

const consultantSlice = createSlice({
  name: 'consultantSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadTopRatedConsultants.fulfilled, (state, { payload }) => {
      state.topRatedConsultants = payload;
    });
  },
});

const consultantReducer = consultantSlice.reducer;

export { consultantReducer, loadTopRatedConsultants };
