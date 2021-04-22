import React from 'react';
import Popup from 'reactjs-popup';
import { useMapLocation } from '../../hooks/DataProvider';
import { songs, aboutSite } from '../../utils/data';
import Upload from '../Upload/Upload';
import 'reactjs-popup/dist/index.css';
import styles from './Blurb.css';

const Blurb = () => {
  const mapLocation = useMapLocation();

  const blurbNodes = songs.map((song) => {
    if (mapLocation === song.mapLocation) {
      return <p key={song.title}>{song.description}</p>;
    }
  });

  return (
    <div className={styles.blurbContainer}>
      <section className={styles.Blurb}>
        {blurbNodes}
        {!mapLocation && <p>{aboutSite.description}</p>} 
        {mapLocation && 
      <Popup 
        modal
        closeOnDocumentClick={true}
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.4)' }}
        trigger={open => (
          <button open={open}>Upload</button>
        )}>
        {close => (
          <Upload close={close} />
        )}
      </Popup>
        } 
      </section>
    </div>
  );
};

export default Blurb;
