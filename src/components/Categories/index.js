import React from "react";
import { connect } from "react-redux";
import { CategoriesComponent } from "./Categories";
import { handleCategoriesLoad } from "@actions/CategoriesActions";

const Categories = (props) => {
  const {user, categories, handleCategoriesLoad } = props;
  return (
    <CategoriesComponent
      {...categories}
      handleCategoriesLoad={handleCategoriesLoad}
    />
  );
};

const mapStateToProps = store => {
  return {
    categories: store.categories,
    user: store.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCategoriesLoad: (categories) => dispatch(handleCategoriesLoad(categories))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);