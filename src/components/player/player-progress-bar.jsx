import { formatAudioTime } from '../../tools/utils';

const PlayerProgressBar = ({
  audioInfo,
  setAudioPosition,
  progressBarColors
}) => {

  const onInputChange = (e) => {
    setAudioPosition(e.target.value);
  };

  const renderContent = () => {
    const { currentTime, duration, animationPercentage } = audioInfo;
    const [ color1, color2 ] = progressBarColors;

    const formatedCurrentTime = formatAudioTime(currentTime);
    const formatedDuration = formatAudioTime(duration);
    const inputMaxValue = duration || 0;

    const dinamicTrackStyle = {
      background: `linear-gradient(to right, ${color1}, ${color2})`
    };
  
    const dinamicAnimationStyle = {
      transform: `translateX(${animationPercentage}%)`
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
            onChange={(e) => onInputChange(e)}
          />
          <div className="animation" style={dinamicAnimationStyle}></div>
        </div>
        <p>{formatedDuration}</p>
      </div>
    );
  };

  return renderContent();
};

export default PlayerProgressBar;