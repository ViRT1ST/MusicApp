import PlayerSongInfo from './player-song-info';
import PlayerProgressBar from './player-progress-bar';
import PlayerButtons from './player-buttons';
import PlayerAudio from './player-audio';

const Player = () => {
  const renderContent = () => {
    return (
      <div className="player">
        <PlayerSongInfo />
        <PlayerProgressBar />
        <PlayerButtons />
        <PlayerAudio />
      </div>
    );
  };

  return renderContent();
};

export default Player;
