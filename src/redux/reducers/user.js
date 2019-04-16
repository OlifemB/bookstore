import {
  USER_CHANGE_ROOT,
} from "@actions/UserActions";

const initialState = {
  isAdmin: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CHANGE_ROOT:
      return { ...state, isAdmin: !action.payload};

    default:
      return state;
  }
};