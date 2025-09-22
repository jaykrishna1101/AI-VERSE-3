// MusicPlayer.jsx
import React, { useEffect, useRef, useState } from 'react';
import music from "../assets/F1 Hans Zimmer (1).mp3"
import { Icon2fa, IconFilter2Pause, IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react';

function MusicPlayer() {
  const audioRef = useRef(null);
  const hasPlayed = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play on scroll or click
  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && !hasPlayed.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.error("Autoplay failed:", err);
        });
        hasPlayed.current = true;
        removeListeners();
      }
    };

    const removeListeners = () => {
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };

    window.addEventListener('scroll', handleUserInteraction);
    window.addEventListener('click', handleUserInteraction);

    return removeListeners;
  }, []);

  // Manual button control
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error("Play failed:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className=' fixed top-4 right-4 z-[999] '>
      <button onClick={togglePlay} className='p outline-none shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl backdrop:white-3 p-[7px]'>
        {isPlaying ? <IconPlayerPause className=' scale-75'/>:<IconPlayerPlay className=' scale-75'/>}
      </button>
      <audio ref={audioRef} src={music} loop />
    </div>
  );
}

export default MusicPlayer;
