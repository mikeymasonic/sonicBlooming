import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  useVisualizerDisplay,
  useHandleVisualizerDisplay,
  useIsIOS13,
  useIsFirefox
} from '../../hooks/DataProvider';
import styles from './Visualizer.css';

const Visualizer = ({ forwardRef }) => {
  let running = true;
  let context;
  const canvasRef = useRef(null);
  const visualizerDisplay = useVisualizerDisplay();
  const handleVisualizerDisplay = useHandleVisualizerDisplay();
  const isFirefox = useIsFirefox();
  const isIOS13 = useIsIOS13();

  const handleClose = () => {
    handleVisualizerDisplay(false);
  };

  useEffect(() => {
    if (isIOS13 || isFirefox) {
      return console.log('visualizer disabled');
    }
    // -------------
    // Audio stuff
    // -------------
    const AudioContext = window.AudioContext || window.webkitAudioContext || false;
    const audio = forwardRef.current.audio.current;
    // audio.context = audio.context || new AudioContext();

    console.log(AudioContext);

    // if('webkitAudioContext' in window) {
    //   const context = new webkitAudioContext();
    // }

    if (AudioContext) {
      context = new AudioContext();
    } else {
      // Alert the user
      alert('Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox');
    }

    // -------------
    // Canvas stuff
    // -------------
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvasRef.current.getContext('2d');

    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 3;
    const radius = document.body.clientWidth <= 425 ? 120 : 140;
    const steps = document.body.clientWidth <= 425 ? 60 : 120;
    const interval = 360 / steps;
    const pointsUp = [];
    const pointsDown = [];
    const pCircle = 2 * Math.PI * radius;
    const angleExtra = 90;

    const splitter = context.createChannelSplitter();

    const analyserL = context.createAnalyser();
    analyserL.fftSize = 8192;

    const analyserR = context.createAnalyser();
    analyserR.fftSize = 8192;

    splitter.connect(analyserL, 0, 0);
    splitter.connect(analyserR, 1, 0);

    // Make a buffer to receive the audio data
    const bufferLengthL = analyserL.frequencyBinCount;
    const audioDataArrayL = new Uint8Array(bufferLengthL);

    const bufferLengthR = analyserR.frequencyBinCount;
    const audioDataArrayR = new Uint8Array(bufferLengthR);

    // Make a audio node
    // audio.source = audio.source || context.createMediaElementSource(audio);
    const source = context.createMediaElementSource(audio);

    source.connect(splitter);
    //comment this out to disable audio playback
    splitter.connect(context.destination);

    // Create points
    for (let angle = 0; angle < 360; angle += interval) {
      const distUp = 1.1;
      const distDown = 0.9;

      pointsUp.push({
        angle: angle + angleExtra,
        x:
          centerX +
          radius * Math.cos(((-angle + angleExtra) * Math.PI) / 180) * distUp,
        y:
          centerY +
          radius * Math.sin(((-angle + angleExtra) * Math.PI) / 180) * distUp,
        dist: distUp,
      });

      pointsDown.push({
        angle: angle + angleExtra + 5,
        x:
          centerX +
          radius *
            Math.cos(((-angle + angleExtra + 5) * Math.PI) / 180) *
            distDown,
        y:
          centerY +
          radius *
            Math.sin(((-angle + angleExtra + 5) * Math.PI) / 180) *
            distDown,
        dist: distDown,
      });
    }

    function drawLine(points) {
      const origin = points[0];

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.5)';
      ctx.lineJoin = 'round';
      ctx.moveTo(origin.x, origin.y);

      for (let i = 0; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }

      ctx.lineTo(origin.x, origin.y);
      ctx.stroke();
    }

    function connectPoints(pointsA, pointsB) {
      for (let i = 0; i < pointsA.length; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.moveTo(pointsA[i].x, pointsA[i].y);
        ctx.lineTo(pointsB[i].x, pointsB[i].y);
        ctx.stroke();
      }
    }
    function draw(dt) {
      requestAnimationFrame(draw);

      if (running) {
        update(dt);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawLine(pointsUp);
      drawLine(pointsDown);
      connectPoints(pointsUp, pointsDown);
    }

    function update() {
      let audioIndex, audioValue;

      // get the current audio data
      analyserL.getByteFrequencyData(audioDataArrayL);
      analyserR.getByteFrequencyData(audioDataArrayR);

      for (let i = 0; i < pointsUp.length; i++) {
        audioIndex =
          Math.ceil(pointsUp[i].angle * (bufferLengthL / (pCircle * 2))) | 0;
        // get the audio data and make it go from 0 to 1
        audioValue = audioDataArrayL[audioIndex] / 255;

        pointsUp[i].dist = 1.1 + audioValue * 0.8;
        pointsUp[i].x =
          centerX +
          radius *
            Math.cos((-pointsUp[i].angle * Math.PI) / 180) *
            pointsUp[i].dist;
        pointsUp[i].y =
          centerY +
          radius *
            Math.sin((-pointsUp[i].angle * Math.PI) / 180) *
            pointsUp[i].dist;

        audioIndex =
          Math.ceil(pointsDown[i].angle * (bufferLengthR / (pCircle * 2))) | 0;
        // get the audio data and make it go from 0 to 1
        audioValue = audioDataArrayR[audioIndex] / 255;

        pointsDown[i].dist = 0.9 + audioValue * 0.2;
        pointsDown[i].x =
          centerX +
          radius *
            Math.cos((-pointsDown[i].angle * Math.PI) / 180) *
            pointsDown[i].dist;
        pointsDown[i].y =
          centerY +
          radius *
            Math.sin((-pointsDown[i].angle * Math.PI) / 180) *
            pointsDown[i].dist;
      }
    }

    draw();

    return function cleanup () {
      context.close();
      running = false;
    };
  }, []);

  return (
    <section className={styles.Visualizer}  style={{ visibility: visualizerDisplay ? 'visible' : 'hidden', height: visualizerDisplay ? 100 : 0 }}>
      <canvas ref={canvasRef} onClick={handleClose} />
    </section>
  );
};

Visualizer.propTypes = {
  close: PropTypes.func,
  forwardRef: PropTypes.object,
};

export default Visualizer;


// import React, { useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useVisualizerDisplay, useHandleVisualizerDisplay } from '../../hooks/DataProvider';
// import styles from './Visualizer.css';

// const Visualizer = ({ forwardRef }) => {
//   let running = true;
//   let context;
//   const canvasRef = useRef(null);
//   const visualizerDisplay = useVisualizerDisplay();
//   const handleVisualizerDisplay = useHandleVisualizerDisplay();

//   const handleClose = () => {
//     handleVisualizerDisplay(false);
//   };

//   useEffect(() => {
//     // -------------
//     // Audio stuff
//     // -------------
//     const audio = forwardRef.current.audio.current;
//     // audio.context = audio.context || new AudioContext();
//     const AudioContext = window.AudioContext || window.webkitAudioContext || false;

//     if (AudioContext) {
//       context =  new AudioContext();
//     } else {
//       // Alert the user
//       alert('Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox');
//     }

//     // -------------
//     // Canvas stuff
//     // -------------
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     canvasRef.current.getContext('2d');

//     canvas.width = document.body.clientWidth;
//     canvas.height = document.body.clientHeight;

//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 5;
//     const radius = document.body.clientWidth <= 425 ? 120 : 140;
//     const steps = document.body.clientWidth <= 425 ? 60 : 120;
//     const interval = 360 / steps;
//     const pointsUp = [];
//     const pointsDown = [];
//     const pCircle = 2 * Math.PI * radius;
//     const angleExtra = 90;

//     const splitter = context.createChannelSplitter();

//     const analyserL = context.createAnalyser();
//     analyserL.fftSize = 8192;

//     const analyserR = context.createAnalyser();
//     analyserR.fftSize = 8192;

//     splitter.connect(analyserL, 0, 0);
//     splitter.connect(analyserR, 1, 0);

//     // Make a buffer to receive the audio data
//     const bufferLengthL = analyserL.frequencyBinCount;
//     const audioDataArrayL = new Uint8Array(bufferLengthL);

//     const bufferLengthR = analyserR.frequencyBinCount;
//     const audioDataArrayR = new Uint8Array(bufferLengthR);

//     // Make a audio node
//     // audio.source = audio.source || context.createMediaElementSource(audio);
//     const source = context.createMediaElementSource(audio);

//     source.connect(splitter);
//     //comment this out to disable audio playback
//     splitter.connect(context.destination);

//     // Create points
//     for (let angle = 0; angle < 360; angle += interval) {
//       const distUp = 1.1;
//       const distDown = 0.9;

//       pointsUp.push({
//         angle: angle + angleExtra,
//         x:
//           centerX +
//           radius * Math.cos(((-angle + angleExtra) * Math.PI) / 180) * distUp,
//         y:
//           centerY +
//           radius * Math.sin(((-angle + angleExtra) * Math.PI) / 180) * distUp,
//         dist: distUp,
//       });

//       pointsDown.push({
//         angle: angle + angleExtra + 5,
//         x:
//           centerX +
//           radius *
//             Math.cos(((-angle + angleExtra + 5) * Math.PI) / 180) *
//             distDown,
//         y:
//           centerY +
//           radius *
//             Math.sin(((-angle + angleExtra + 5) * Math.PI) / 180) *
//             distDown,
//         dist: distDown,
//       });
//     }

//     function drawLine(points) {
//       const origin = points[0];

//       ctx.beginPath();
//       ctx.strokeStyle = 'rgba(255,255,255,0.5)';
//       ctx.lineJoin = 'round';
//       ctx.moveTo(origin.x, origin.y);

//       for (let i = 0; i < points.length; i++) {
//         ctx.lineTo(points[i].x, points[i].y);
//       }

//       ctx.lineTo(origin.x, origin.y);
//       ctx.stroke();
//     }

//     function connectPoints(pointsA, pointsB) {
//       for (let i = 0; i < pointsA.length; i++) {
//         ctx.beginPath();
//         ctx.strokeStyle = 'rgba(255,255,255,0.5)';
//         ctx.moveTo(pointsA[i].x, pointsA[i].y);
//         ctx.lineTo(pointsB[i].x, pointsB[i].y);
//         ctx.stroke();
//       }
//     }
//     function draw(dt) {
//       requestAnimationFrame(draw);

//       if (running) {
//         update(dt);
//       }

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       drawLine(pointsUp);
//       drawLine(pointsDown);
//       connectPoints(pointsUp, pointsDown);
//     }

//     function update() {
//       let audioIndex, audioValue;

//       // get the current audio data
//       analyserL.getByteFrequencyData(audioDataArrayL);
//       analyserR.getByteFrequencyData(audioDataArrayR);

//       for (let i = 0; i < pointsUp.length; i++) {
//         audioIndex =
//           Math.ceil(pointsUp[i].angle * (bufferLengthL / (pCircle * 2))) | 0;
//         // get the audio data and make it go from 0 to 1
//         audioValue = audioDataArrayL[audioIndex] / 255;

//         pointsUp[i].dist = 1.1 + audioValue * 0.8;
//         pointsUp[i].x =
//           centerX +
//           radius *
//             Math.cos((-pointsUp[i].angle * Math.PI) / 180) *
//             pointsUp[i].dist;
//         pointsUp[i].y =
//           centerY +
//           radius *
//             Math.sin((-pointsUp[i].angle * Math.PI) / 180) *
//             pointsUp[i].dist;

//         audioIndex =
//           Math.ceil(pointsDown[i].angle * (bufferLengthR / (pCircle * 2))) | 0;
//         // get the audio data and make it go from 0 to 1
//         audioValue = audioDataArrayR[audioIndex] / 255;

//         pointsDown[i].dist = 0.9 + audioValue * 0.2;
//         pointsDown[i].x =
//           centerX +
//           radius *
//             Math.cos((-pointsDown[i].angle * Math.PI) / 180) *
//             pointsDown[i].dist;
//         pointsDown[i].y =
//           centerY +
//           radius *
//             Math.sin((-pointsDown[i].angle * Math.PI) / 180) *
//             pointsDown[i].dist;
//       }
//     }

//     draw();

//     return function cleanup () {
//       context.close();
//       running = false;
//     };
//   }, []);

//   return (
//     <section className={styles.Visualizer}  style={{ visibility: visualizerDisplay ? 'visible' : 'hidden', height: visualizerDisplay ? 100 : 0 }}>
//       <canvas ref={canvasRef} onClick={handleClose} />
//     </section>
//   );
// };

// Visualizer.propTypes = {
//   close: PropTypes.func,
//   forwardRef: PropTypes.object,
// };

// export default Visualizer;
