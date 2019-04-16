import React from "react";
import PropTypes from "prop-types";
import { booksData } from "@data/books";
import "./books.scss";
import { BookItem } from "./BookItem";
import { BookPopup } from "./BookPopup";

export const BooksComponent = (props) => {
  const {
    isAdmin,
    isLoaded,
    isOpen,
    bookOpen,
    bookList,
    search,
    handleBooksLoad,
    handleBookOpen,
    handleBookAdd,
    handleBookRemove,
    handleBookUpdate,
    handleSearchReset
  } = props;


  const bookInfoPopup = () => {
    if (isOpen) {
      return (
        <BookPopup
          {...bookOpen}
          action={'edit'}
          isAdmin={isAdmin}
          handleBookOpen={handleBookOpen}
          handleBookAdd={handleBookAdd}
          handleBookRemove={handleBookRemove}
          handleBookUpdate={handleBookUpdate}
          handleSearchReset={handleSearchReset}
        />
      );
    }
    return null;
  };

  const renderTemplate = () => {
    if (isLoaded) {
      return (
        bookList.map(book =>
          <BookItem
            isAdmin={isAdmin}
            book={book}
            search={search}
            isOpen={isOpen}
            handleBookOpen={handleBookOpen}
            handleSearchReset={handleSearchReset}
            key={`book-${book.isbn}`}
          />
        ));
    }
    return handleBooksLoad(booksData);
  };

  return (
    <>
      <div className={`container block`}>
        <div className={`row books`}>
          {renderTemplate()}
        </div>
      </div>
      {bookInfoPopup()}
    </>
  );
};


BooksComponent.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  bookList: PropTypes.array.isRequired,
  handleBooksLoad: PropTypes.func.isRequired,
  handleBookOpen: PropTypes.func.isRequired,
  handleBookAdd: PropTypes.func.isRequired,
  handleBookUpdate: PropTypes.func.isRequired,
  handleBookRemove: PropTypes.func.isRequired,
  handleSearchReset: PropTypes.func.isRequired
};