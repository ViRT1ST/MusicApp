import { useSelector, useDispatch } from 'react-redux';

import { updateProgressBar } from '../../redux/progress-bar';
import { formatAudioTime } from '../../tools/utils';

const PlayerProgressBar = () => {
  const dispatch = useDispatch();

  const colors = useSelector((state) => state.currentSong.colors);
  const progressBar = useSelector((state) => state.progressBar);
  const { totalTime, currentTime, currentPercentage } = progressBar;

  const onInputChange = (e) => {
    const current = e.target.value;
    dispatch(updateProgressBar(current, totalTime, true));
  };

  const renderContent = () => {
    const [ color1, color2 ] = colors;

    const formatedCurrentTime = formatAudioTime(currentTime);
    const formatedTotalTime = formatAudioTime(totalTime);
    const inputMaxValue = totalTime || 0;

    const dinamicTrackStyle = {
      background: `linear-gradient(to right, ${color1}, ${color2})`
    };
  
    const dinamicAnimationStyle = {
      transform: `translateX(${currentPercentage}%)`
    };
  
    return (
      <div className="player-progress-bar">
        <p>{formatedCurrentTime}</p>

        <div className="track" style={dinamicTrackStyle}>
          <input
            type="range"
            min={0}
            max={inputMaxValue}
            value={currentTime}
            onChange={onInputChange}
          />
          <div className="animation" style={dinamicAnimationStyle}></div>
        </div>

        <p>{formatedTotalTime}</p>
      </div>
    );
  };

  return renderContent();
};

export default PlayerProgressBar;