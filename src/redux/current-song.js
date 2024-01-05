import songList from '../tools/data';

const initState = songList[0];

const currentSongReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_SONG':
      return payload;
    default:
      return state;
  }
};

const setCurrentSong = (object) => async (dispatch) => {
  dispatch({
    type: 'SET_SONG',
    payload: object
  });
};

export {
  currentSongReducer,
  setCurrentSong
};
