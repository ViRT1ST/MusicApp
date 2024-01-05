import { combineReducers } from 'redux';

import { allSongsReducer } from './all-songs';
import { currentSongReducer } from './current-song';
import { isLibraryOpenReducer } from './is-library-open';
import { isPlayingReducer } from './is-playing';
import { progressBarReducer } from './progress-bar';

const rootReducer = combineReducers({
  allSongs: allSongsReducer,
  currentSong: currentSongReducer,
  isLibraryOpen: isLibraryOpenReducer,
  isPlaying: isPlayingReducer,
  progressBar: progressBarReducer
});

export default rootReducer;
