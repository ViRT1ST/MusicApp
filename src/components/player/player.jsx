import PlayerSongInfo from './player-song-info';
import PlayerProgressBar from './player-progress-bar';
import PlayerButtons from './player-buttons';

const Player = ({
  audioInfo,
  currentSong,
  isPlaying,
  setIsPlaying,
  setAudioPosition,
  changeTrack
}) => {
  
  const renderContent = () => {
    const { colors } = currentSong;

    return (
      <div className="player">
        <PlayerSongInfo
          currentSong={currentSong}
        />
        <PlayerProgressBar
          audioInfo={audioInfo}
          setAudioPosition={setAudioPosition}
          progressBarColors={colors}
        />
        <PlayerButtons
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          changeTrack={changeTrack}
        />
      </div>
    );
  };

  return renderContent();
};

export default Player;