import { combineReducers } from "redux";
import { appReducer } from "@reducers/app";
import { booksReducer } from "@reducers/books";
import { categoriesReducer } from "@reducers/categories";
import { userReducer } from "@reducers/user";
import { searchReducer } from "@reducers/search";

export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  categories: categoriesReducer,
  books: booksReducer,
  search: searchReducer
});