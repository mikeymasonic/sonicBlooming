import React, { useState } from 'react';
// import { useSong } from '../../hooks/DataProvider';
import { useHandleSong } from '../../hooks/DataProvider';
import {
  songs,
} from '../../utils/data';
import styles from './Playlist.css';
// import styles from 'react-h5-audio-Playlist/lib/styles.css';

const Playlist = (location) => {
  // const [locationState, setLocationState] = useState('');

  const mapLocation = location;
  const handleSong = useHandleSong();
  // const song = useSong();
  const playlistNodes = songs.map((song) => {
    if (location === locationState) {
      return <a key={song.title} onClick={() => handleSong(song)}>{song.title}</a>;
    }
    
  });

  return (
    <section className={styles.Playlist}>


    </section>
  );
};

export default Playlist;
