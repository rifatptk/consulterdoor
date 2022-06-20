import { SET_IS_OVERLAY_LOADING } from '../constant';
import { ISetOverLay } from './types';

export const setIsOverlayLoading = (isOverlayLoading: boolean): ISetOverLay => {
  return {
    type: SET_IS_OVERLAY_LOADING,
    isOverlayLoading
  };
};
