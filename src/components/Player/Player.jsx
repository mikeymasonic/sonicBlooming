import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useSong } from '../../hooks/DataProvider';
import styles from './Player.scss';
// import styles from './Player.css';
// import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/src/styles.scss';

const Player = () => {
  const song = useSong();

  return (
    <section className={styles.Player}>
      {/* <h1>{song?.title}</h1> */}
      <AudioPlayer
        className={styles.whatever}
        src={song?.url}
        header={song ? (`Now playing: ${song.title}`) : ('')}
        layout="horizontal"
        width='100%'
      />
    </section>
  );
};

export default Player;
