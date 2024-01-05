import { useSelector } from 'react-redux';

import LibraryItem from './library-item';

const Library = () => {
  const allSongs = useSelector((state) => state.allSongs);
  const isLibraryOpen = useSelector((state) => state.isLibraryOpen);
  
  const renderContent = () => {
    const classes = isLibraryOpen ? 'library active' : 'library';
  
    return (
      <div className={classes}>
        <h2>Library</h2>
        <div className="library-songs">
          {allSongs.map((item) => (
            <LibraryItem key={item.id} songData={item}/>
          ))}    
        </div>
      </div>
    );
  };

  return renderContent();
};

export default Library;
