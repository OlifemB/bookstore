export const BOOKS_LOAD = "BOOKS_LOAD";
export const BOOK_OPEN = "BOOK_OPEN";
export const BOOK_ADD = "BOOK_ADD";
export const BOOK_UPDATE = "BOOK_UPDATE";
export const BOOK_REMOVE = "BOOK_REMOVE";

export const handleBooksLoad = (books) => {
  return (dispatch) => {
    dispatch({
      type: BOOKS_LOAD,
      payload: books.list
    });
  };
};

export const handleBookOpen = (book) => {
  return (dispatch) => {
    dispatch({
      type: BOOK_OPEN,
      isOpen: book.isOpen,
      payload: book.info
    });
  };
};

export const handleBookAdd = (book) => {
  return (dispatch) => {
    dispatch({
      type: BOOK_ADD,
      payload: {
        isbn: book.isbn,
        title: book.title,
        description: book.description,
        author: book.author
      }
    });
  };
};

export const handleBookUpdate = (book) => {
  return (dispatch) => {
    dispatch({
      type: BOOK_UPDATE,
      payload: book
    });
  };
};

export const handleBookRemove = (book) => {
  return (dispatch) => {
    dispatch({
      type: BOOK_REMOVE,
      payload: book.info
    });
  };
};
