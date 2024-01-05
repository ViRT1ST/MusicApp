const initState = false;

const isLibraryOpenReducer = (state = initState, action) => {
  const { type } = action;

  switch (type) {
    case 'TOGGLE_LIBRARY':
      return !state;
    default:
      return state;
  }
};

const toggleLibrary = () => async (dispatch) => {
  dispatch({
    type: 'TOGGLE_LIBRARY'
  });
};

export {
  isLibraryOpenReducer,
  toggleLibrary
};
