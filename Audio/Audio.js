import React, { useRef, useEffect } from 'react';

const Audio = ({ volume, ...rest }) => {
  const audioRef = useRef();

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, []);

  return <audio ref={audioRef} {...rest} />;
}

export default Audio;
