import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { consultServicesService } from '../../services';

const initialState: any = {
  consultServices: {
    data: [],
    pagination: {},
  },
  consultCategories: [],
};

export const consultServiceSlice = createSlice({
  name: 'consultServiceSlice',
  initialState,
  reducers: {
    loadConsultServices: async (
      state,
      action: PayloadAction<{
        type: string;
        pageNumber?: number;
        pageSize?: number;
      }>
    ) => {
      const result = await consultServicesService.getConsultServices({
        type: action.payload.type,
        pageNumber: action.payload.pageNumber,
        pageSize: action.payload.pageSize,
      });
      state.consultServices = result;
    },
  },
});

const { loadConsultServices } = consultServiceSlice.actions;
const consultServiceReducer = consultServiceSlice.reducer;

export { loadConsultServices, consultServiceReducer };
