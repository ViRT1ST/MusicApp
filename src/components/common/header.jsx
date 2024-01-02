import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setIsLibraryOpen }) => {

  const onButtonClick = () => {
    setIsLibraryOpen((prevState) => !prevState);
  };

  const renderContent = () => {
    return (
      <nav>
        <h1>Music Waves</h1>
        <button onClick={onButtonClick}>
          Library{' '}
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </nav>
    )
  };

  return renderContent();
};

export default Header;