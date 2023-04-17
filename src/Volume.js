import React, { useEffect, useState } from "react";

const Volume = ({ sound }) => {
  const [volume, setVolume] = useState(0);
  const [title, setTitle] = useState(sound);

  function volumeFunc(e) {
    setVolume(e.target.value);
  }

  useEffect(() => {
    const target = document.getElementById(sound);
    target.volume = volume / 100;
  }, [volume]);
  useEffect(() => {
    setTitle(sound.charAt(0).toUpperCase() + sound.slice(1));
  }, []);

  return (
    <div className="volume">
      <p>{title}</p>
      <audio id={`${sound}`} controls autoPlay loop src={`.x/sound/${sound}.mp3`} type="audio/mpeg" />
      <input onChange={volumeFunc} type="range" max="100" value={volume} />
    </div>
  );
};

export default Volume;
