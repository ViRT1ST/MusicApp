const initState = false;

const isPlayingReducer = (state = initState, action) => {
  const { type } = action;

  switch (type) {
    case 'TOGGLE_PLAYING':
      return !state;
    default:
      return state;
  }
};

const togglePlaying = () => async (dispatch) => {
  dispatch({
    type: 'TOGGLE_PLAYING'
  });
};

export {
  isPlayingReducer,
  togglePlaying
};
