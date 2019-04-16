import React, { useState } from "react";
import PropTypes from "prop-types";

export const AdminPanelComponent = (props) => {
  const {
    isAdmin,
    handleChangeRoot,
    handleBookOpen
  } = props;

  const handleClickBookAdd = () => {
    return (
      handleBookOpen({ info: {}, isOpen: false})
    );
  };

  const handleClickCategoryAdd = () => {
    console.log("category Add");
  };

  const renderTemplate = () => {
    return (
      <div className={`col-12 p-3`}>
        <h4>Control panel</h4>
        <p>Now you are {isAdmin ? `admin` : `user`}</p>
        <input
          type={`button`}
          className={`btn btn-large btn-block btn-primary`}
          value={`Change root`}
          onClick={() => handleChangeRoot(isAdmin)}/>
        {isAdmin
          ? <>
            <input
              type={`button`}
              className={`btn btn-large btn-block`}
              value={`Add book`}
              onClick={handleClickBookAdd}/>
            <input
              type={`button`}
              className={`btn btn-large btn-block`}
              value={`Add category`}
              onClick={handleClickCategoryAdd}/>
          </>
          : null
        }
      </div>
    );
  };
  return (
    <div className={`container block mt-4`}>
      <div className={`row`}>
        {renderTemplate()}
      </div>
    </div>
  );
};

AdminPanelComponent.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  handleChangeRoot: PropTypes.func.isRequired,
  handleBookOpen: PropTypes.func.isRequired
};