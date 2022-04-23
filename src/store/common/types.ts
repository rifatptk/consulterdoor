import { SET_IS_OVERLAY_LOADING } from "../constant";

export interface ISetOverLay {
  type: typeof SET_IS_OVERLAY_LOADING;
  isOverlayLoading: boolean;
}


export type CommonActionTypes =
  | ISetOverLay