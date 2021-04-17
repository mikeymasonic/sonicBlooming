import React from 'react';
import ScrollArea from 'react-scrollbar';
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
      <div className={styles.title}>
        Playlist:
      </div>
      <ScrollArea
        speed={0.8}
        className={styles.scroll}
        contentClassName={styles.content}
        horizontal={false}>
        {playlistNodes}
      </ScrollArea>
    </section>
  );
};

export default Playlist;
