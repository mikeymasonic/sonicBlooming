import React, { useEffect, useState } from 'react';
import ScrollArea from 'react-scrollbar';
import { useHandleSong, useMapLocation } from '../../hooks/DataProvider';
import {
  songs,
} from '../../utils/data';
import styles from '../Player/Player.css';

const Playlist = () => {
  const [playlistVisible, setPlaylistVisible] = useState(false);
  const mapLocation = useMapLocation();
  const handleSong = useHandleSong();
  const mapLocationNodes = [];
  const playlistTitle = mapLocation + ' Playlist';
  const upperPlaylistTitle = playlistTitle.toUpperCase();
  
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
    <section className={styles.Playlist} style={{ visibility: playlistVisible ? 'visible' : 'hidden', height: !playlistVisible && 0 }}>
      <div className={styles.playlistTitle}>
        {upperPlaylistTitle}
      </div>
      <ScrollArea
        speed={0.8}
        className={styles.scroll}
        contentClassName={styles.content}
        vertical={false}>
        {playlistNodes}
      </ScrollArea>
    </section>
  );
};

export default Playlist;
