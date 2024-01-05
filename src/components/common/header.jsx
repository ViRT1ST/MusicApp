import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import { toggleLibrary } from '../../redux/is-library-open';

const Header = () => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(toggleLibrary());
  };

  const renderContent = () => {
    return (
      <nav>
        <h1>Music Waves</h1>
        <button onClick={onButtonClick}>
          {'Library '}<FontAwesomeIcon icon={faMusic} />
        </button>
      </nav>
    );
  };

  return renderContent();
};

export default Header;