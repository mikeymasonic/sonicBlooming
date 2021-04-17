import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useSong } from '../../hooks/DataProvider';
import styles from './Player.css';
// import 'react-h5-audio-player/lib/styles.css';

const Player = () => {
  const song = useSong();

  return song ? (
    <section className={styles.Player}>
      <div className={styles.title}>
        {song?.mapLocation} - {song?.title}
      </div>
      <AudioPlayer
        className={styles.rhap_container}
        src={song?.url}
        customProgressBarSection={
          [
            RHAP_UI.CURRENT_TIME,
            // eslint-disable-next-line react/jsx-key
            <div>/</div>,
            RHAP_UI.DURATION
          ]
        }
      />
    </section>
  ) : (
    <section className={styles.Player}>
      <AudioPlayer
        className={styles.rhap_container}
        src={song?.url}
        customProgressBarSection={
          [
            RHAP_UI.CURRENT_TIME,
            // eslint-disable-next-line react/jsx-key
            <div>/</div>,
            RHAP_UI.DURATION
          ]
        }
      />
    </section>
  );
};

export default Player;
