import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentSong } from '../../redux/current-song';
import { updateProgressBar } from '../../redux/progress-bar';

const PlayerAudio = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  const allSongs = useSelector((state) => state.allSongs);
  const currentSong = useSelector((state) => state.currentSong);
  const isPlaying = useSelector((state) => state.isPlaying);
  const currentTime = useSelector((state) => state.progressBar.currentTime);
  const changedByClick = useSelector((state) => state.progressBar.changedByClick);

  const onAudioUpdate = (e) => {
    const { currentTime, duration } = e.target;
    dispatch(updateProgressBar(currentTime, duration, false));
  };

  const onAudioEnd = () => {
    const currentIndex = allSongs.findIndex(({ id }) => id === currentSong.id);
    const nextSong = allSongs[currentIndex + 1];
    dispatch(setCurrentSong(nextSong));
  };

  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause();
  }, [currentSong, isPlaying]);

  useEffect(() => {
    audioRef.current.currentTime = currentTime;
  }, [changedByClick]);

  const renderContent = () => {
    return (
      <audio
        ref={audioRef}
        onLoadedMetadata={onAudioUpdate}
        onTimeUpdate={onAudioUpdate}
        onEnded={onAudioEnd}
        src={currentSong.audio}
      ></audio>
    );
  };

  return renderContent();
};

export default PlayerAudio;
