import { SET_IS_OVERLAY_LOADING } from '../constant';

const defaultStateApp = {
  isOverlayLoading: false
};

export default function CommonReducer(
  state: any = defaultStateApp,
  action: any
) {
  switch (action.type) {
    case SET_IS_OVERLAY_LOADING:
      return {
        ...state,
        isOverlayLoading: action.isOverlayLoading
      };
    default:
      return state;
  }
}
