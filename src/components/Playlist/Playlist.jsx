import React from 'react';
import { useHandleSong, useMapLocation } from '../../hooks/DataProvider';
import {
  songs,
} from '../../utils/data';
import styles from './Playlist.css';

const Playlist = () => {
  const mapLocation = useMapLocation();
  const handleSong = useHandleSong();
  
  const playlistNodes = songs.map((song) => {
    if (mapLocation === song.mapLocation) {
      return <a key={song.title} onClick={() => handleSong(song)}>{song.title}</a>;
    }
  });

  return (
    <section className={styles.Playlist}>
      {playlistNodes}
    </section>
  );
};

export default Playlist;
