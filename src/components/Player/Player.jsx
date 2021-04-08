import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useSong } from '../../hooks/DataProvider';
import styles from './Player.css';
// import styles from 'react-h5-audio-player/lib/styles.css';

const Player = () => {
  const song = useSong();

  return (
    <>
      <h1>{song?.title}</h1>
      <AudioPlayer
        className={styles.whatever}
        src={song?.url}
        // onPlay={() => console.log('onPlay')}
      />
    </>
  );
};

export default Player;
