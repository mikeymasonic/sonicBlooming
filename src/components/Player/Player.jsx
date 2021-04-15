import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useSong } from '../../hooks/DataProvider';
import styles from './Player.css';
// import 'react-h5-audio-player/lib/styles.css';

const Player = () => {
  const song = useSong();

  return (
    <section className={styles.Player}>
      <h1>{song?.title}</h1>
      <AudioPlayer
        className={styles.rhap_container}
        src={song?.url}
        // onPlay={() => console.log('onPlay')}
      />
    </section>
  );
};

export default Player;
