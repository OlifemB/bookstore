import React, { useState } from "react";
import PropTypes from "prop-types";

export const BookPopup = (props) => {
  const {
    isAdmin,
    id,
    isbn,
    title,
    author,
    description,
    img,
    handleBookOpen,
    handleBookAdd,
    handleBookUpdate,
    handleBookRemove,
    handleSearchReset
  } = props;

  let action;
  id ? action = "update" : action = "remove";

  const [bookState, setBookState] = useState({
    id: id || "",
    isbn: isbn || "",
    title: title || "",
    author: author || "",
    description: description || "",
    img: img || ""
  });

  const updateBookInfo = (e) => {
    if (e.target.name === "isbn")
      return setBookState({ ...bookState, [e.target.name]: parseInt(e.target.value) });
    return setBookState({ ...bookState, [e.target.name]: e.target.value });
  };

  const renderTemplate = () => {
    if (isAdmin) {
      return (
        <div className={`form-group`}>
          <input
            type={`text`}
            name={`title`}
            className={`form-control my-2`}
            onChange={(e) => updateBookInfo(e)}
            value={bookState.title}
            placeholder={`Title`}/>
          <input
            type={`text`}
            name={`author`}
            className={`form-control my-2`}
            onChange={(e) => updateBookInfo(e)}
            value={bookState.author}
            placeholder={`Author`}/>
          <textarea
            name={`description`}
            className={`form-control my-2`}
            onChange={(e) => updateBookInfo(e)}
            value={bookState.description}
            placeholder={`Description`}
            rows={10}/>
          <input
            type={`text`}
            name={`isbn`}
            className={`form-control my-2`}
            onChange={(e) => updateBookInfo(e)}
            value={bookState.isbn}
            placeholder={`ISBN`}/>

          {action === "update" ?
            <input
              type={`button`}
              className={`btn btn-large btn-success mr-2`}
              value={`Update`}
              onClick={() => {
                handleBookUpdate(bookState);
                handleBookOpen({ info: {}, isOpen: true });
              }}/>
            :
            <input
              type={`button`}
              className={`btn btn-large btn-success mr-2`}
              value={`submit`}
              onClick={() => {
                handleBookAdd(bookState);
                handleBookOpen({ info: {}, isOpen: true });
              }}/>
          }

          <input
            type={`button`}
            className={`btn btn-large btn-danger`}
            value={`Remove`}
            onClick={() => {
              handleBookRemove(bookState);
              handleBookOpen({ info: {}, isOpen: true });
            }}/>
        </div>
      );
    } else {
      return (
        <>
          <h4>{title}</h4>
          <p><b>{author}</b></p>
          <p>{description}</p>
          <p>ISBN: {isbn}</p>
        </>
      );
    }
  };

  return (
    <div className={`popup`}>
      <div className={`container block mt-5`}>
        <div className={`row popup-wrapper`}>
          <div className={`col-md-4 d-sm-none d-md-block`}>
            <img className={`img-fluid`} src={img} alt={title}/>
          </div>
          <div className={`col-md-8 col-sm-12 `}>
            {renderTemplate()}
          </div>
          <input
            type={`button`}
            className={`btn btn-large btn-danger btn-return`}
            onClick={() => {
              handleSearchReset();
              handleBookOpen({ info: {}, isOpen: true });
            }}
            value={`X`}
          />
        </div>
      </div>
    </div>
  );
};

BookPopup.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  isbn: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  handleBookAdd: PropTypes.func,
  handleBookOpen: PropTypes.func.isRequired,
  handleBookUpdate: PropTypes.func.isRequired,
  handleBookRemove: PropTypes.func.isRequired,
  handleSearchReset: PropTypes.func.isRequired
};
