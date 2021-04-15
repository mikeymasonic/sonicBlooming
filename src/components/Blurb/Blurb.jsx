import React from 'react';
import { useMapLocation } from '../../hooks/DataProvider';
import {
  songs,
  aboutSite,
} from '../../utils/data';
import Upload from '../Upload/Upload';
import styles from './Blurb.css';

const Blurb = () => {
  const mapLocation = useMapLocation();

  const blurbNodes = songs.map((song) => {
    if (mapLocation === song.mapLocation) {
      return <p>{song.description}</p>;
    }
  });

  return (
    <section className={styles.Blurb}>
      {blurbNodes}
      {!mapLocation && <p>{aboutSite.description}</p>} 
      {mapLocation && <Upload />} 
    </section>
  );
};

export default Blurb;
