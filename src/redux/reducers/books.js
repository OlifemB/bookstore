import {
  BOOKS_LOAD,
  BOOK_OPEN,
  BOOK_ADD,
  BOOK_UPDATE,
  BOOK_REMOVE
} from "@actions/BooksActions";

const initialState = {
  list: [],
  isLoaded: false,
  isOpen: false,
  bookOpen: {}
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_LOAD:
      console.log("BOOKS_LOAD", action.payload);
      return {
        ...state,
        list: action.payload,
        isLoaded: true
      };

    case BOOK_OPEN:
      return {
        ...state,
        bookOpen: action.payload,
        isOpen: !action.isOpen
      };

    case BOOK_ADD: {
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    }

    case BOOK_UPDATE: {
      //book => {id, isbn, title, author, description, img}
      return ({
        ...state,
        list: list.find(book => book.id === action.payload.id)
          ? console.log()
          : console.log()

      });
    }

    case BOOK_REMOVE: {
      const prunedIds = state.id.filter(item => {
        return item !== action.id;
      });
      delete list[action.id];

      return {
        id: prunedIds,
        list: state.list
      };
    }

    default:
      return state;
  }
};