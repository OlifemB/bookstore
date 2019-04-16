import {
  APP_LOADED,
} from "@actions/AppActions";

const initialState = {
  isLoaded: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADED:
      return { ...state, isLoaded: true};

    default:
      return state;
  }
};