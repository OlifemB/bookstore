export const APP_LOADED = "APP_LOADED";

export const handleAppLoaded = () => {
  return (dispatch) => {
    dispatch({
      type: APP_LOADED,
      payload: true
    });
  };
};