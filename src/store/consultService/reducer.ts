import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { consultServicesService } from '../../services';
import { IAddService, IAddServiceMetaData } from '../../services/interfaces';

export interface IConsultServiceState {
  consultServices: {
    data: any[];
    pagination: object;
  };
  consultCategories: any[];
  addService: {
    stage?: string;
    data?: IAddService
  };
  addServiceMetaData: IAddServiceMetaData;
}

const initialState: IConsultServiceState = {
  consultServices: {
    data: [],
    pagination: {},
  },
  consultCategories: [],
  addService: {
    stage: 'overview',
    data: {
    }
  },
  addServiceMetaData: {

  }
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
  reducers: {
    setAddService: (state, action: PayloadAction<IConsultServiceState['addService']>) => {
      state.addService = {
        ...state.addService,
        ...action.payload,
        data: {
          ...state.addService.data,
          ...action.payload.data
        }
      };
    },
    setAddServiceMetaData: (state, action: PayloadAction<IConsultServiceState['addServiceMetaData']>) => {
      state.addServiceMetaData = {
        ...state.addServiceMetaData,
        ...action.payload
      };
    }
  },
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

const { setAddService, setAddServiceMetaData } = consultServiceSlice.actions;

export { consultServiceReducer, loadConsultServices, loadConsultCategories, setAddService, setAddServiceMetaData };
