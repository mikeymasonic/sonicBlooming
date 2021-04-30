import React, { createRef } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useSong, usePlayerVisible, useVisualizerDisplay, useHandleVisualizerDisplay } from '../../hooks/DataProvider';
import Playlist from '../Playlist/Playlist';
import Visualizer from '../Visualizer/Visualizer';
import styles from './Player.css';
import 'reactjs-popup/dist/index.css';

const Player = () => {
  const song = useSong();
  const playerVisible = usePlayerVisible();
  // const onAbout = useOnAbout();
  const player = createRef();
  const visualizerDisplay = useVisualizerDisplay();
  const handleVisualizerDisplay = useHandleVisualizerDisplay();
  const playerTitle = `${song?.mapLocation} - ${song?.title}`.toUpperCase();


  const handleFullscreen = () => {
    handleVisualizerDisplay(!visualizerDisplay);
  };

  return (
    <>
      <section className={styles.audioContainer}>
        <Playlist style={{ visibility: playerVisible ? 'visible' : 'hidden', height: playerVisible ? 100 : 0 }} />

        <div className={styles.playerContainer} style={{ visibility: playerVisible ? 'visible' : 'hidden', height: playerVisible ? 50 : 0, marginBottom: playerVisible ? 20 : 0 }}>
          <section className={styles.title}>{playerTitle}</section>
          <section className={styles.Player} style={{ visibility: playerVisible ? 'visible' : 'collapse', height: playerVisible ? 50 : 0 }}>

            <section className={styles.playerControls}>
              <AudioPlayer
                ref={player}
                className={styles.rhap_container}
                src={song?.url}
                customProgressBarSection={
                  [
                    RHAP_UI.CURRENT_TIME,
                    <section key="slash">/</section>,
                    RHAP_UI.DURATION,
                  ]
                }
              />
              {!visualizerDisplay
                ?
                <button onClick={handleFullscreen} className={styles.fullscreen}><img src='./images/fullscreen.png' height='25px' /></button>
                : <button onClick={handleFullscreen} className={styles.fullscreen}><img src='./images/close.png' height='25px' /></button>
              }
            </section>
          </section>
        </div>

        {playerVisible && <Visualizer forwardRef={player}/>} 
        {/* {!playerVisible && !onAbout && <p className={styles.instructions}>Select a garden to listen to:</p>}  */}
      </section>
    </>
  );
};

export default Player;
