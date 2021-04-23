import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Visualizer.css';

const Visualizer = (props) => {
  // const [visualizerOn, setVisualizerOn] = useState(false);
  const canvasRef = useRef(null);
  let running = true;

  useEffect(() => {
    // console.log('propThing: ', props.forwardRef.current.context);
    const centerX = 500;
    const centerY = 500;
    const radius = document.body.clientWidth <= 425 ? 120 : 160;
    const steps = document.body.clientWidth <= 425 ? 60 : 120;
    const interval = 360 / steps;
    const pointsUp = [];
    const pointsDown = [];
    const pCircle = 2 * Math.PI * radius;
    const angleExtra = 90;
    
    // -------------
    // Audio stuff
    // -------------

    const context = new AudioContext();
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
    // const audio = new Audio();
    const audio = props.forwardRef.current.audio.current;
    const source = context.createMediaElementSource(audio);
    source.connect(splitter);
    //comment this out to disable audio playback
    splitter.connect(context.destination);

    // Create points
    for(let angle = 0; angle < 360; angle += interval) {
      const distUp = 1.1;
      const distDown = 0.9;
  
      pointsUp.push({
        angle: angle + angleExtra,
        x: centerX + radius * Math.cos((-angle + angleExtra) * Math.PI / 180) * distUp,
        y: centerY + radius * Math.sin((-angle + angleExtra) * Math.PI / 180) * distUp,
        dist: distUp
      });
  
      pointsDown.push({
        angle: angle + angleExtra + 5,
        x: centerX + radius * Math.cos((-angle + angleExtra + 5) * Math.PI / 180) * distDown,
        y: centerY + radius * Math.sin((-angle + angleExtra + 5) * Math.PI / 180) * distDown,
        dist: distDown
      });
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvasRef.current.getContext('2d');
    // console.log(canvasRef.current.getContext('2d'));

    // -------------
    // Canvas stuff
    // -------------
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

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
        audioIndex = Math.ceil(pointsUp[i].angle * (bufferLengthL / (pCircle * 2))) | 0;
        // get the audio data and make it go from 0 to 1
        audioValue = audioDataArrayL[audioIndex] / 255;
  
        pointsUp[i].dist = 1.1 + audioValue * 0.8;
        pointsUp[i].x = centerX + radius * Math.cos(-pointsUp[i].angle * Math.PI / 180) * pointsUp[i].dist;
        pointsUp[i].y = centerY + radius * Math.sin(-pointsUp[i].angle * Math.PI / 180) * pointsUp[i].dist;
  
        audioIndex = Math.ceil(pointsDown[i].angle * (bufferLengthR / (pCircle * 2))) | 0;
        // get the audio data and make it go from 0 to 1
        audioValue = audioDataArrayR[audioIndex] / 255;
  
        pointsDown[i].dist = 0.9 + audioValue * 0.2;
        pointsDown[i].x = centerX + radius * Math.cos(-pointsDown[i].angle * Math.PI / 180) * pointsDown[i].dist;
        pointsDown[i].y = centerY + radius * Math.sin(-pointsDown[i].angle * Math.PI / 180) * pointsDown[i].dist;
      }
    }

    draw();
  }, []);

  return (
    <section className={styles.Visualizer}>
      <canvas ref={canvasRef} />
    </section>
  );
};

Visualizer.propTypes = {
  forwardRef: PropTypes.object,
};

export default Visualizer;
