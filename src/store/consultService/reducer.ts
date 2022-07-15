import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { consultServicesService } from '../../services';

const initialState: any = {
  consultServices: {
    data: [],
    pagination: {},
  },
  consultCategories: [],
};

const loadConsultServices = createAsyncThunk(
  'consultServiceSlice/loadConsultServices',
  async (data: any) => {
    return consultServicesService.getConsultServices(data);
  }
);

const loadConsultCategories = createAsyncThunk(
  'consultServiceSlice/loadConsultCategories',
  async () => {
    return consultServicesService.getServiceCategories();
  }
);

export const consultServiceSlice = createSlice({
  name: 'consultServiceSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadConsultServices.fulfilled, (state, { payload }) => {
        state.consultServices = payload;
      })
      .addCase(loadConsultCategories.fulfilled, (state, { payload }) => {
        state.consultCategories = payload.data;
      });
  },
});

const consultServiceReducer = consultServiceSlice.reducer;

export { consultServiceReducer, loadConsultServices, loadConsultCategories };
