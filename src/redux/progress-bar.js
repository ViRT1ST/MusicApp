const initState = {
  totalTime: 0,
  currentTime: 0,
  currentPercentage: 0,
  changedByClick: 0
};

const progressBarReducer = (state = initState, action) => {
  const { type, payload = {} } = action;
  const { position = 0, length = 0, isClicked = false } = payload;
  const count = state.changedByClick;

  switch (type) {
    case 'PROGRESS_UPDATE':
      return {
        totalTime: parseInt(length, 10),
        currentTime: parseInt(position, 10),
        currentPercentage: Math.round((position / length) * 100),
        changedByClick: isClicked ? count + 1 : count,
      };
    default:
      return state;
  }
};

const updateProgressBar = (position, length, isClicked) => (dispatch) => {
  dispatch({
    type: 'PROGRESS_UPDATE',
    payload: {
      position,
      length,
      isClicked
    }
  });
};

export {
  progressBarReducer,
  updateProgressBar,
};
