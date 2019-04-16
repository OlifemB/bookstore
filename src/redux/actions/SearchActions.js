export const SEARCH_STRING = "SEARCH_STRING";
export const SEARCH_RESET = "SEARCH_RESET";

export const handleSearchString = (search) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_STRING,
      payload: search.value
    });
  };
};

export const handleSearchReset = () => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_RESET,
      payload: ''
    });
  };
};
