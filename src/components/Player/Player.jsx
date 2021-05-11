import React, { createRef, useEffect } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { 
  useSong,
  usePlayerVisible,
  useVisualizerDisplay,
  useHandleVisualizerDisplay,
  useIsSafari,
  useIsIOS13,
  useHandleIsSafari,
  useIsFirefox,
  useHandleIsFirefox,
  useHandleIsIOS13
} from '../../hooks/DataProvider';
import Playlist from '../Playlist/Playlist';
import Visualizer from '../Visualizer/Visualizer';
import styles from './Player.css';

const Player = () => {
  let version;
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
  const isIOS13 = useIsIOS13();
  const handleIsIOS13 = useHandleIsIOS13();
  // eslint-disable-next-line no-undef
  // const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === '[object SafariRemoteNotification]'; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

  const isSafariCheck = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf('CriOS') == -1 &&
  navigator.userAgent.indexOf('FxiOS') == -1;
  console.log('is safari: ', isSafariCheck);
  console.log('is safari global: ', isSafari);


  // You can detect iOS 13 on iPhone but in iPad OS 13 navigator.platform comes as MacIntel. So it is not possible to get iPad identified using below code, but it works perfectly on iPhone.

  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    const v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    version = [parseInt(v[1], 10)];
    //if you want all of the os numbers uncomment below
    // version = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }
  console.log('iOS version : ' + version);

  const isFirefoxCheck = typeof InstallTrigger !== 'undefined';
  // console.log('is firefox: ', isFirefox);

  //   const isIOSCheck =       
  //   ['iPad Simulator',
  //     'iPhone Simulator',
  //     'iPod Simulator',
  //     'iPad',
  //     'iPhone',
  //     'iPod'
  //   ].includes(navigator.platform)
  // // iPad on iOS 13 detection
  // || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

  useEffect(() => {
    if (isSafariCheck) {
      console.log('we on safari');
      handleIsSafari(true);
    }
    // if (isIOSCheck) {
    //   console.log('we on ios');
    //   handleIsSafari(true);
    // }
    if (isFirefoxCheck) {
      console.log('we on firefox');
      handleIsFirefox(true);
    }
    if (version === 13) {
      console.log('we on iOS ', version);
      handleIsIOS13(true);
      handleIsSafari(true);
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
              />
              }

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
              />
              }
      

              {!isFirefox && !isIOS13 &&
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

// import React, { createRef } from 'react';
// import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
// import { useSong, usePlayerVisible, useVisualizerDisplay, useHandleVisualizerDisplay } from '../../hooks/DataProvider';
// import Playlist from '../Playlist/Playlist';
// import Visualizer from '../Visualizer/Visualizer';
// import styles from './Player.css';
// import 'reactjs-popup/dist/index.css';

// const Player = () => {
//   const song = useSong();
//   const playerVisible = usePlayerVisible();
//   // const onAbout = useOnAbout();
//   const player = createRef();
//   const visualizerDisplay = useVisualizerDisplay();
//   const handleVisualizerDisplay = useHandleVisualizerDisplay();
//   const playerTitle = `${song?.mapLocation} - ${song?.title}`.toUpperCase();


//   const handleFullscreen = () => {
//     handleVisualizerDisplay(!visualizerDisplay);
//   };

//   return (
//     <>
//       <section className={styles.audioContainer}>
//         <Playlist style={{ visibility: playerVisible ? 'visible' : 'hidden', height: playerVisible ? 100 : 0 }} />

//         <div className={styles.playerContainer} style={{ visibility: playerVisible ? 'visible' : 'hidden', height: playerVisible ? 100 : 0, marginBottom: playerVisible ? 20 : 0 }}>
//           <section className={styles.title}>{playerTitle}</section>
//           <section className={styles.Player} style={{ visibility: playerVisible ? 'visible' : 'collapse', height: playerVisible ? 100 : 0 }}>

//             <section className={styles.playerControls}>
//               <AudioPlayer
//                 ref={player}
//                 className={styles.rhap_container}
//                 src={song?.url}
//                 customProgressBarSection={
//                   [
//                     RHAP_UI.CURRENT_TIME,
//                     <section key="slash">/</section>,
//                     RHAP_UI.DURATION,
//                   ]
//                 }
//               />
//               {!visualizerDisplay
//                 ?
//                 <button onClick={handleFullscreen}><img src='./images/fullscreen.png' height='25px' /></button>
//                 : <button onClick={handleFullscreen}><img src='./images/close.png' height='25px' /></button>
//               }
//             </section>
//           </section>
//         </div>

//         {playerVisible && <Visualizer forwardRef={player}/>} 
//         {/* {!playerVisible && !onAbout && <p className={styles.instructions}>Select a garden to listen to:</p>}  */}
//       </section>
//     </>
//   );
// };

// export default Player;
