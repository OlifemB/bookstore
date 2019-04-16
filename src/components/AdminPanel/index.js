import React from "react";
import { AdminPanelComponent } from "./AdminPanelComponent";
import { connect } from "react-redux";
import { handleChangeRoot } from "@actions/UserActions";
import { handleBookOpen, handleBookAdd } from "@actions/BooksActions";
import { handleCategoryAdd } from "@actions/CategoriesActions";

const AdminPanel = (props) => {
  const {
    user,
    handleChangeRoot,
    handleBookAdd,
    handleBookOpen,
    handleCategoryAdd
  } = props;

  return (
    <AdminPanelComponent
      isAdmin={user.isAdmin}
      handleChangeRoot={handleChangeRoot}
      handleBookOpen={handleBookOpen}
      handleBookAdd={handleBookAdd}
      handleCategoryAdd={handleCategoryAdd}
    />
  );
};

const mapStateToProps = store => {
  return {
    user: store.user,
    books: store.books,
    categories: store.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeRoot: (isAdmin) => dispatch(handleChangeRoot({ isAdmin: isAdmin })),
    handleBookOpen: (book) => {
      console.log("handleBookOpen", book);
      dispatch(handleBookOpen({ info: book.info, isOpen: book.isOpen }));
    },
    handleBookAdd: (book) => dispatch(handleBookAdd(book)),
    handleCategoryAdd: (category) => dispatch(handleCategoryAdd(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel);