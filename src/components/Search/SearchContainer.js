import React from "react";
import PropTypes from "prop-types";

export const SearchComponent = (props) => {
  const { placeholder, value, handleSearchString, handleSearchReset } = props;
  const renderTemplate = () => {
    return (
      <input
        type={`text`}
        className={`form-control`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleSearchString(e.target.value)}
      />
    );
  };

  return (

    <div className={`container block`}>
      <div className={`row search p-2`}>
        {renderTemplate()}
      </div>
    </div>
  );
};


SearchComponent.propTypes = {
  value: PropTypes.string.isRequired,
  handleSearchString: PropTypes.func.isRequired,
  handleSearchReset: PropTypes.func.isRequired
};