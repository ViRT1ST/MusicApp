import { useSelector } from 'react-redux';

import Header from '../components/common/header';
import Player from '../components/player/player';
import Library from '../components/library/library';

const App = () => {
  const isLibraryOpen = useSelector((state) => state.isLibraryOpen);

  const renderContent = () => {
    const classes = isLibraryOpen ? 'app library-active' : 'app';

    return (
      <div className={classes}>
        <Header />
        <Player />
        <Library />
      </div>
    );
  };
  
  return renderContent();
};

export default App;
