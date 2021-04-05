import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

// const Player = () => (
//   <AudioPlayer
//     autoPlay
//     src="http://example.com/audio.mp3"
//     onPlay={e => console.log("onPlay")}
//     // other props here
//   />
// );

export default function App() {
  return <><h1>Hello World</h1>
  <AudioPlayer
  autoPlay
  src="./example/mp3/example.mp3"
  onPlay={e => console.log("onPlay")}
  // other props here
/>
</>
}
