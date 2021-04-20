import React, { useEffect, useState } from 'react';
import ScrollArea from 'react-scrollbar';
import { useHandleSong, useMapLocation } from '../../hooks/DataProvider';
import {
  songs,
} from '../../utils/data';
import styles from './Playlist.css';

const Playlist = () => {
  const [playlistVisible, setPlaylistVisible] = useState(false);
  const mapLocation = useMapLocation();
  const handleSong = useHandleSong();
  const mapLocationNodes = [];
  
  const playlistNodes = songs.map((song) => {
    if (mapLocation === song.mapLocation) {
      mapLocationNodes.push(song.mapLocation);
      return <a key={song.title} onClick={() => handleSong(song)}>{song.title}</a>;
    }
  });

  useEffect(() => {
    if (mapLocationNodes.length > 1) {
      setPlaylistVisible(true);
    } else {
      setPlaylistVisible(false);
    }
  }, [mapLocationNodes]);

  return (
    <section className={styles.Playlist} style={{ visibility: playlistVisible ? 'visible' : 'hidden' }}>
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
