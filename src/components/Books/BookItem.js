import React, { useState } from "react";
import PropTypes from "prop-types";
import { BookPopup } from "./BookPopup";

export const BookItem = (props) => {
  const {
    isAdmin,
    book,
    search,
    isOpen,
    handleBookOpen,
    handleBookRemove,
    handleSearchReset
  } = props;

  const [bookState, setBookState] = useState({
    id: book.id || "",
    isbn: book.isbn || "",
    title: book.title || "",
    author: book.author || "",
    description: book.description || "",
    img: book.img || ""
  });

  if (bookState.isbn === parseInt(search.value)) {
    return (
      <BookPopup
        {...bookState}
        isAdmin={isAdmin}
        handleSearchReset={handleSearchReset}
        handleBookRemove={handleBookRemove}
      />
    );
  }
  if ((`${bookState.author} ${bookState.title}`).match(RegExp(search.value, "ig")) || search.value.length === 0) {
    return (
      <div className={`col-lg-3 col-md-4 col-sm-6 mb-4`}>
        <div className={`book`} onClick={() => handleBookOpen({ info: bookState, isOpen: isOpen })}>
          <div className={`book-wrapper`}>
            <div className={`book-img`}>
              <img src={bookState.img} className={`img-cover`} alt={bookState.title}/>
            </div>
            <div className={`book-info`}>
              {bookState.title}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  handleBookOpen: PropTypes.func.isRequired,
  handleSearchReset: PropTypes.func.isRequired
};