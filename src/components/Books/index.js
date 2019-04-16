import React from "react";
import { connect } from "react-redux";
import { BooksComponent } from "./BooksComponent";
import {
  handleBooksLoad,
  handleBookOpen,
  handleBookAdd,
  handleBookUpdate,
  handleBookRemove
} from "@actions/BooksActions";
import { handleSearchReset } from "@actions/SearchActions";

const Books = (props) => {
  const {
    search,
    user,
    books,
    handleBooksLoad,
    handleBookOpen,
    handleBookAdd,
    handleBookUpdate,
    handleBookRemove,
    handleSearchReset
  } = props;

  return (
    <BooksComponent
      bookList={books.list}
      isLoaded={books.isLoaded}
      isOpen={books.isOpen}
      bookOpen={books.bookOpen}
      isAdmin={user.isAdmin}
      search={search}
      handleBooksLoad={handleBooksLoad}
      handleBookOpen={handleBookOpen}
      handleBookAdd={handleBookAdd}
      handleBookUpdate={handleBookUpdate}
      handleBookRemove={handleBookRemove}
      handleSearchReset={handleSearchReset}
    />
  );
};

const mapStateToProps = store => {
  return {
    books: store.books,
    search: store.search,
    user: store.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleBooksLoad: (booksList) => dispatch(handleBooksLoad({ list: booksList })),
    handleBookOpen: (book) => dispatch(handleBookOpen({ info: book.info, isOpen: book.isOpen })),
    handleBookAdd: (book) => dispatch(handleBookAdd(book)),
    handleBookUpdate: (book) => dispatch(handleBookUpdate(book)),
    handleBookRemove: (book) => dispatch(handleBookRemove({ id: book.id })),
    handleSearchReset: () => dispatch(handleSearchReset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);