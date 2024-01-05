import { useSelector, useDispatch } from 'react-redux';

import { setCurrentSong } from '../../redux/current-song';

const LibraryItem = ({ songData }) => {
  const dispatch = useDispatch();

  const currentSong = useSelector((state) => state.currentSong);
  
  const onItemClick = () => {
    dispatch(setCurrentSong(songData));
  };

  const renderContent = () => {
    const { artist, title, cover } = songData;

    const itemClasses = songData.id === currentSong.id
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
