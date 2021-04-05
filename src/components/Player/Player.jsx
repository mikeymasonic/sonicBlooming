import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
// import styles from 'react-h5-audio-player/lib/styles.css';
import styles from './Player.css'

function Player() {
  return (
    <AudioPlayer
    className={styles}
    src="./mp3/example.mp3"
    onPlay={e => console.log("onPlay")}
    />
 );
};

export default Player;
