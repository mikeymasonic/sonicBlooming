import React, { createRef, useEffect, useState } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import Playlist from '../Playlist/Playlist';
import Visualizer from '../Visualizer/Visualizer';
import {
  loadingImage
} from '../../utils/data';
import { 
  useSong,
  usePlayerVisible,
  useVisualizerDisplay,
  useHandleVisualizerDisplay,
  useIsSafari,
  useLoading,
  useHandleIsSafari,
  useIsFirefox,
  useHandleIsFirefox,
  useHandleLoading,
} from '../../hooks/DataProvider';
import styles from './Player.css';

const Player = () => {
  const song = useSong();
  const playerVisible = usePlayerVisible();
  const player = createRef();
  const visualizerDisplay = useVisualizerDisplay();
  const handleVisualizerDisplay = useHandleVisualizerDisplay();
  const playerTitle = `${song?.mapLocation} - ${song?.title}`.toUpperCase();
  const isSafari = useIsSafari();
  const handleIsSafari = useHandleIsSafari();
  const isFirefox = useIsFirefox();
  const handleIsFirefox = useHandleIsFirefox();
  const loading = useLoading();
  const handleLoading = useHandleLoading();
  const [paused, setPaused] = useState(false);

  const isIOSCheck =   
  ['iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document); // iPad on iOS 13 detection

  const isSafariCheck = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf('CriOS') == -1 &&
  navigator.userAgent.indexOf('FxiOS') == -1;

  const isFirefoxCheck = typeof InstallTrigger !== 'undefined';

  useEffect(() => {
    if (isSafariCheck) {
      console.log('we on safari');
      handleIsSafari(true);
    }

    if (isFirefoxCheck) {
      console.log('we on firefox');
      handleIsFirefox(true);
    }

    if (isIOSCheck) {
      handleIsSafari(true);
      console.log('we on ios');
    }
  }, []);

  const handleFullscreen = () => {
    handleVisualizerDisplay(!visualizerDisplay);
  };

  return (
    <>
      <section className={styles.audioContainer}>
        <Playlist style={{ visibility: playerVisible ? 'visible' : 'hidden', height: playerVisible ? 100 : 0 }} />

        <div className={styles.playerContainer} style={{ visibility: playerVisible ? 'visible' : 'hidden', height: playerVisible ? 70 : 0, marginBottom: playerVisible ? 20 : 0 }}>

          <section className={styles.title}>{playerTitle}</section>
          <section className={styles.Player} style={{ visibility: playerVisible ? 'visible' : 'collapse', height: playerVisible ? 70 : 0 }}>

            <section className={styles.playerControls}>
              {isSafari &&        
              <AudioPlayer
                ref={player}
                className={styles.rhap_container}
                src={song?.url}
                onPlay={() => {
                  console.log('playback started');
                  if (!paused){
                    handleLoading(true);
                  } else if (paused) {
                    setPaused(false);
                  }
                  console.log('loading? ', loading);
                }}
                onPause={() => {
                  setPaused(true);
                  console.log('paused? ', paused);
                }}
                onLoadedData={() => {
                  console.log('waiting');
                  handleLoading(false);
                  console.log('loading? ', loading);
                }}
                onEnded={() => {
                  if (visualizerDisplay){
                    handleVisualizerDisplay(false);
                  }
                }}
                customProgressBarSection={
                  [
                    RHAP_UI.CURRENT_TIME,
                    <section key="slash">/</section>,
                    RHAP_UI.DURATION,
                  ]
                }
                customVolumeControls = {[]}
              />
              }

              {!isSafari &&               
              <AudioPlayer
                ref={player}
                className={styles.rhap_container}
                src={song?.url}
                onPlay={() => {
                  console.log('playback started');
                  if (!paused){
                    handleLoading(true);
                  } else if (paused) {
                    setPaused(false);
                  }
                  console.log('loading? ', loading);
                }}
                onPause={() => {
                  setPaused(true);
                  console.log('paused? ', paused);
                }}
                onLoadedData={() => {
                  console.log('waiting');
                  handleLoading(false);
                  console.log('loading? ', loading);
                }}
                onEnded={() => {
                  if (visualizerDisplay){
                    handleVisualizerDisplay(false);
                  }
                }}
                customProgressBarSection={
                  [
                    RHAP_UI.CURRENT_TIME,
                    <section key="slash">/</section>,
                    RHAP_UI.DURATION,
                  ]
                }/>
              }

              {!isFirefox && !isSafari &&
              <section>
                {!visualizerDisplay
                  ?
                  <button onClick={handleFullscreen} className={styles.fullscreen}><img src='./images/fullscreen.png' height='25px' /></button>
                  : <button onClick={handleFullscreen} className={styles.fullscreen}><img src='./images/close.png' height='25px' /></button>}
              </section>} 
              
            </section>
          </section>
        </div>
        
        {loading && 
        <section className={styles.loadingContainer}>
          <img src={loadingImage.loadingImage} className={styles.loadingImage} />
        </section>}

        {playerVisible && <Visualizer forwardRef={player}/>} 
      </section>
    </>
  );
};

export default Player;
