export const USER_CHANGE_ROOT = "USER_CHANGE_ROOT";

export const handleChangeRoot = (user) => {
  return (dispatch) => {
    dispatch({
      type: USER_CHANGE_ROOT,
      payload: user.isAdmin
    });
  };
};