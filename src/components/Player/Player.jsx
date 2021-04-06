import React from 'react';
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

const Player = () => {
  const song = useSong();
  const handleSong = useHandleSong();

  return (
    <>
      <h1>{song.url}</h1>
      <AudioPlayer
        className={styles}
        src={song.url}
        onPlay={() => console.log('onPlay')}
      />
      
      <button
        onClick={()=>handleSong(songOne)}>
          song one
      </button>

      <button
        onClick={()=>handleSong(songTwo)}>
          song two
      </button>

      <button
        onClick={()=>handleSong(songThree)}>
          song three
      </button>

      <button
        onClick={()=>handleSong(songFour)}>
          song four
      </button>
    </>
  );
};

export default Player;
