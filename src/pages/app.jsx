import { useState, useEffect, useRef } from 'react';

import Header from '../components/common/header';
import Player from '../components/player/player';

import Library from '../components/library/library';
import songs from '../tools/data';

const App = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioInfo, setAudioInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const audioRef = useRef(null);

  const onAudioUpdate = async (e) => {
    const { currentTime, duration } = e.target;
    const animationPercentage = Math.round((currentTime / duration) * 100);

    await setAudioInfo({
      currentTime,
      duration,
      animationPercentage
    });
  };

  const setAudioPosition = (time) => {
    audioRef.current.currentTime = time;
  }

  const changeTrack = (direction) => {
    const currentIndex = songs.findIndex((item) => item.id === currentSong.id);
    const nextIndex = direction === 'forward'
      ? (currentIndex + 1 + songs.length) % songs.length
      : (currentIndex - 1 + songs.length) % songs.length;

    setCurrentSong(songs[nextIndex]);
  };

  const onAudioEnd = () => {
    changeTrack('forward');
  };
  
  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause();
      
  }, [currentSong, isPlaying]);

  const renderContent = () => {
    const appClasses = isLibraryOpen ? 'app library-active' : 'app';

    return (
      <div className={appClasses}>
        <Header
          setIsLibraryOpen={setIsLibraryOpen}
        />
        <Player
          audioInfo={audioInfo}
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setAudioPosition={setAudioPosition}
          changeTrack={changeTrack}
        />
        <Library
          songs={songs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          isLibraryOpen={isLibraryOpen}
        />
        <audio
          ref={audioRef}
          onLoadedMetadata={onAudioUpdate}
          onTimeUpdate={onAudioUpdate}
          onEnded={onAudioEnd}
          src={currentSong.audio}>
        </audio>
      </div>
    );
  };
  
  return renderContent();
}

export default App;
