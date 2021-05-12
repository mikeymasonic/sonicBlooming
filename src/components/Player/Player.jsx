import React, { createRef, useEffect } from 'react';
import {
  loadingImage
} from '../../utils/data';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { 
  useSong,
  usePlayerVisible,
  useVisualizerDisplay,
  useHandleVisualizerDisplay,
  useIsSafari,
  // useIsIOS13,
  useLoading,
  useHandleIsSafari,
  useIsFirefox,
  useHandleIsFirefox,
  // useHandleIsIOS13
  useHandleLoading,
} from '../../hooks/DataProvider';
// import loadingImage from '../images/map2.png';
import Playlist from '../Playlist/Playlist';
import Visualizer from '../Visualizer/Visualizer';
import styles from './Player.css';

const Player = () => {
  // let version = 0;
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
  // const isIOS13 = useIsIOS13();
  // const handleIsIOS13 = useHandleIsIOS13();


  const iOS =   
  ['iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform);
    // iPad on iOS 13 detection
    // || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);


  const isSafariCheck = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf('CriOS') == -1 &&
  navigator.userAgent.indexOf('FxiOS') == -1;
  // console.log('is safari: ', isSafariCheck);
  // console.log('is safari global: ', isSafari);

  // if (/iP(hone|od|ad)/.test(navigator.platform)) {
  //   const v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
  //   version = [parseInt(v[1], 10)];
  //   //if you want all of the os numbers uncomment below
  //   // version = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  // }
  // console.log('iOS version : ' + version);

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

    if (iOS) {
      handleIsSafari(true);
      console.log('we on ios');
    }

    // if (version[0] === 13) {
    //   // console.log('we on iOS ', version[0]);
    //   handleIsIOS13(true);
    //   handleIsSafari(true);
    // }

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
                  handleLoading(true);
                  console.log('loading? ', loading);
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
                  handleLoading(true);
                  console.log('loading? ', loading);
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
              />
              }
      

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
