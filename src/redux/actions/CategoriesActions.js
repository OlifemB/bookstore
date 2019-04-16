export const CATEGORIES_LOAD = "CATEGORIES_LOAD";
export const CATEGORY_SELECT = "CATEGORY_SELECT";
export const CATEGORY_ADD = "CATEGORY_ADD";

export const handleCategoriesLoad = (categories) => {
  return (dispatch) => {
    dispatch({
      type: CATEGORIES_LOAD,
      payload: categories
    });
  };
};

export const handleCategorySelect = (category) => {
  return (dispatch) => {
    dispatch({
      type: CATEGORY_SELECT,
      payload: category.id
    });
  };
};

export const handleCategoryAdd = (category) => {
  return (dispatch) => {
    dispatch({
      type: CATEGORY_ADD,
      payload: {
        id: category.id,
        title: category.title,
      }
    });
  };
};