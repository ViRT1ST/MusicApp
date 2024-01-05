import { useSelector } from 'react-redux';

const PlayerSongInfo = () => {
  const currentSong = useSelector((state) => state.currentSong);
  
  const renderContent = () => {
    const { artist, title, cover } = currentSong;

    return (
      <div className="player-song-info">
        <img src={cover} alt="cover" />
        <h2>{title}</h2>
        <h3>{artist}</h3>
      </div>
    );
  };

  return renderContent();
};

export default PlayerSongInfo;
