import {
  CATEGORIES_LOAD
} from "@actions/CategoriesActions";

import { categoriesData } from "@data/categories";

const initialState = {
  categories: categoriesData
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_LOAD:
      return { ...state, category: action.payload };

    default:
      return state;
  }
};