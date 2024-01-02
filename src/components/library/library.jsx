import LibraryItem from './library-item';

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  isLibraryOpen
}) => {
  
  const renderContent = () => {
    const libraryClasses = isLibraryOpen ? 'library active' : 'library';
  
    return (
      <div className={libraryClasses}>
        <h2>Library</h2>
        <div className="library-songs">
          {songs.map((item) => {
            return (
              <LibraryItem
                key={item.id}
                song={item}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
              />
            )
          })}    
        </div>
      </div>
    );
  };

  return renderContent();
};

export default Library;
