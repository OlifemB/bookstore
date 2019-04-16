import React from "react";
import PropTypes from "prop-types";

const Category = (props) => {
  const { id, title } = props;
  return (
    <div className={`col-12 category`}>
        {title}
    </div>
  );
};

export const CategoriesComponent = (props) => {
  const { categories, handleCategoriesLoad } = props;
  const renderTemplate = () => {
    return (
      categories.map(item =>
        <Category
          {...item}
          key={`book-${item.id}`}
        />
      )
    );
  };
  return (
    <div className={`container block`}>
      <div className={`row categories`}>
        {renderTemplate()}
      </div>
    </div>
  );
};

CategoriesComponent.propType = {
  categories: PropTypes.array.isRequired,
  handleCategoriesLoad: PropTypes.func.isRequired
};
