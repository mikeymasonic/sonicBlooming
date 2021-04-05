import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import style from 'react-h5-audio-player/lib/styles.css';

function Player() {
  return (
    <AudioPlayer
    className={style}
    src="./mp3/example.mp3"
    onPlay={e => console.log("onPlay")}
    />
 );
};

export default Player;
