import React, { useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useSong, useHandleSong } from '../../hooks/DataProvider';
import {
  songOne,
  songTwo,
  songThree,
  songFour,
} from '../../utils/data';
// import styles from 'react-h5-audio-player/lib/styles.css';
import styles from './Player.css';

// let handleSongs = useHandleSongs();
const Player = () => {
  const song = useSong();
  const handleSong = useHandleSong();


  // handleSong();
  // const handleSongs = (thing) => {
  //   // console.log(thing)
  //   // event.preventDefault(); 
  //   useHandleSongs(thing);
  //   console.log('handleSongs', songs);
    
  // }


  // useEffect(() => {
  //   console.log('useEffect happened');
  //   handleSong(songFour);
  // }, []);

  // useHandleSongs(songTwo);


  // const makeSong = (thing) => {
  //   useHandleSongs(thing);
  //   console.log('hello')
  // } 

  // const handleClick = () => {
  //   console.log('whatever')
  //   makeSong('../mp3/example3.mp3');
  // };

  return (
    <>
      <h1>{song.url}</h1>
      <AudioPlayer
        className={styles}
        src={song.url}
        onPlay={e => console.log('onPlay')}
      />
      {/* <a href="songOne">uhhh</a> */}
      
      {/* <button
        onClick={handleSong}>
          Click here!
      </button> */}
      {/* <button onClick={() => handleClick()}>
          Click here!
    </button> */}
    </>
  );
};

export default Player;
