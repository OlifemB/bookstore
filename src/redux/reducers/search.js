import {
  SEARCH_STRING,
  SEARCH_RESET
} from "@actions/SearchActions";

const initialState = {
  value: ""
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_STRING: {
      return { ...state, value: action.payload };
    }
    case SEARCH_RESET: {
      return { ...state, value: action.payload };
    }
    default:
      return state;
  }
};
