import React, { createRef, useEffect } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { 
  useSong,
  usePlayerVisible,
  useVisualizerDisplay,
  useHandleVisualizerDisplay,
  useIsSafari,
  useHandleIsSafari,
  useIsFirefox,
  useHandleIsFirefox
} from '../../hooks/DataProvider';
import Playlist from '../Playlist/Playlist';
import Visualizer from '../Visualizer/Visualizer';
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
  // eslint-disable-next-line no-undef
  // const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === '[object SafariRemoteNotification]'; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

  const isSafariCheck = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf('CriOS') == -1 &&
  navigator.userAgent.indexOf('FxiOS') == -1;
  console.log('is safari: ', isSafariCheck);
  console.log('is safari global: ', isSafari);

  const isFirefoxCheck = typeof InstallTrigger !== 'undefined';
  // console.log('is firefox: ', isFirefox);

  const isIOSCheck =       
  ['iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
// iPad on iOS 13 detection
|| (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

  useEffect(() => {
    if (isSafariCheck) {
      console.log('we on safari');
      handleIsSafari(true);
    }
    if (isIOSCheck) {
      console.log('we on ios');
      handleIsSafari(true);
    }
    if (isFirefoxCheck) {
      console.log('we on firefox');
      handleIsFirefox(true);
    }
  }, []);

  const handleFullscreen = () => {
    handleVisualizerDisplay(!visualizerDisplay);
  };

  // console.log(player);

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
              /> }

              {!isSafari &&               
              <AudioPlayer
                ref={player}
                className={styles.rhap_container}
                src={song?.url}
                onPlay={() => {
                  console.log('playback started');
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
              /> }

              {!isFirefox && !isSafari &&
              <section>
                {!visualizerDisplay
                  ?
                  <button onClick={handleFullscreen} className={styles.fullscreen}><img src='./images/fullscreen.png' height='25px' /></button>
                  : <button onClick={handleFullscreen} className={styles.fullscreen}><img src='./images/close.png' height='25px' /></button>
                }
              </section>
              }
            </section>
          </section>
        </div>

        {playerVisible && <Visualizer forwardRef={player}/>} 
      </section>
    </>
  );
};

export default Player;
