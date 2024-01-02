import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const PlayerButtons = ({ isPlaying, setIsPlaying, changeTrack }) => {

  const onPlayClick = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const onSkipClick = (direction) => {
    changeTrack(direction);
  }

  const renderContent = () => {
    const playButtonIcon = isPlaying ? faPause : faPlay;

    return (
      <div className="player-buttons">
        <FontAwesomeIcon
          size="2x"
          icon={faAngleLeft}
          onClick={() => onSkipClick('back')}
        />
        <FontAwesomeIcon
          size="2x"
          icon={playButtonIcon}
          onClick={onPlayClick}
        />
        <FontAwesomeIcon
          size="2x"
          icon={faAngleRight}
          onClick={() => onSkipClick('forward')}
        />
      </div>
    );
  };

  return renderContent();
};

export default PlayerButtons;