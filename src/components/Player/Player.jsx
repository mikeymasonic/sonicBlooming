import React, { createRef } from 'react';
import Popup from 'reactjs-popup';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useSong, usePlayerVisible } from '../../hooks/DataProvider';
import Playlist from '../Playlist/Playlist';
import Visualizer from '../Visualizer/Visualizer';
import styles from './Player.css';
import 'reactjs-popup/dist/index.css';
// import 'react-h5-audio-player/lib/styles.css';

const Player = () => {
  const song = useSong();
  const playerVisible = usePlayerVisible();
  const player = createRef();

  return (
    <>
      <section className={styles.audioContainer}>
        <Playlist style={{ visibility: playerVisible ? 'visible' : 'hidden', height: playerVisible ? 100 : 0 }} />

        <section className={styles.Player} style={{ visibility: playerVisible ? 'visible' : 'collapse', height: playerVisible ? 100 : 0 }}>
          <section className={styles.title}>
            {song?.mapLocation} - {song?.title}
          </section>

          <AudioPlayer
            ref={player}
            className={styles.rhap_container}
            src={song?.url}
            customProgressBarSection={
              [
                RHAP_UI.CURRENT_TIME,
                // eslint-disable-next-line react/jsx-key
                <section>/</section>,
                RHAP_UI.DURATION
              ]
            }
          />
        </section>
        <Popup 
          modal
          closeOnDocumentClick={true}
          overlayStyle={{ background: 'rgba(0, 0, 0, 0.4)' }}
          trigger={open => (
            <button open={open}>Fullscreen</button>
          )}>
          {close => (
            <Visualizer forwardRef={player} close={close}/>
          )}
        </Popup>
        

        {!playerVisible && <p className={styles.instructions}>Select a garden to listen to:</p>} 
      </section>
    </>
  );
};

export default Player;
