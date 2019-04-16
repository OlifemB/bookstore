import React from "react";
import { SearchComponent } from "./SearchContainer";
import { handleSearchString, handleSearchReset } from "@actions/SearchActions";
import { connect } from "react-redux";

const SearchBar = (props) => {
  const { placeholder, search, handleSearchString, handleSearchReset } = props;
  return (
    <SearchComponent
      value={search.value}
      category={search.category}
      placeholder={placeholder || `Search`}
      handleSearchString={handleSearchString}
      handleSearchReset={handleSearchReset}
    />
  );
};

const mapStateToProps = store => {
  return {
    search: store.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchString: (searchString) => dispatch(handleSearchString({ value: searchString })),
    handleSearchReset: () => dispatch(handleSearchReset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);