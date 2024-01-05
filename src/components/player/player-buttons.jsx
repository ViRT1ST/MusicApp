import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

import { setCurrentSong } from '../../redux/current-song';
import { togglePlaying } from '../../redux/is-playing';

const PlayerButtons = () => {
  const dispatch = useDispatch();
  
  const allSongs = useSelector((state) => state.allSongs);
  const currentSong = useSelector((state) => state.currentSong);
  const isPlaying = useSelector((state) => state.isPlaying);
  
  const onPlayClick = () => {
    dispatch(togglePlaying());
  };

  const changeTrack = (direction) => {
    const currentIndex = allSongs.findIndex(({ id }) => id === currentSong.id);
    const nextIndex = direction === 'forward'
      ? (currentIndex + 1 + allSongs.length) % allSongs.length
      : (currentIndex - 1 + allSongs.length) % allSongs.length;

    const nextSong = allSongs[nextIndex];
    dispatch(setCurrentSong(nextSong));
  };

  const renderContent = () => {
    const playIcon = isPlaying ? faPause : faPlay;

    return (
      <div className="player-buttons">
        <FontAwesomeIcon
          size="2x"
          icon={faAngleLeft}
          onClick={() => changeTrack('back')}
        />
        <FontAwesomeIcon
          size="2x"
          icon={playIcon}
          onClick={onPlayClick}
        />
        <FontAwesomeIcon
          size="2x"
          icon={faAngleRight}
          onClick={() => changeTrack('forward')}
        />
      </div>
    );
  };

  return renderContent();
};

export default PlayerButtons;