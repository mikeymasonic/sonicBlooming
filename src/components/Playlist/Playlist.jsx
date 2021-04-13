import React from 'react';
import { useHandleSong, useMapLocation } from '../../hooks/DataProvider';
import {
  songs,
} from '../../utils/data';
import styles from './Playlist.css';

const Playlist = () => {

  const mapLocation = useMapLocation();
  const handleSong = useHandleSong();
  // const song = useSong();

  // if (mapLocation === song.mapLocation[0])
  const playlistNodes = songs.map((song) => {
    // return <p key={song.title}>hi</p>;
    if (mapLocation === song.mapLocation) {
      // handleSong(songs[0]);
      return <a key={song.title} onClick={() => handleSong(song)}>{song.title}</a>;
    }
    // handleSong(songs[1]);
  });

  return (
    <section className={styles.Playlist}>
      {playlistNodes}
    </section>
  );
};

export default Playlist;
