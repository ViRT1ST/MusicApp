const LibraryItem = ({ song, currentSong, setCurrentSong }) => {

  const onItemClick = () => {
    setCurrentSong(song);
  };

  const renderContent = () => {
    const { artist, title, cover } = song;

    const itemClasses = song.id === currentSong.id
      ? 'library-item active'
      : 'library-item';

    return (
      <div className={itemClasses} onClick={onItemClick}>
        <img src={cover} alt="Song Image" />
        <div className="library-item-info">
          <h3>{title}</h3>
          <h4>{artist}</h4>
        </div>
      </div>
    );
  };

  return renderContent();
};

export default LibraryItem;