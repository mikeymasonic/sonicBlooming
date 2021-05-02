import React from 'react';
import Popup from 'reactjs-popup';
import { useMapLocation } from '../../hooks/DataProvider';
import { songs, aboutSite } from '../../utils/data';
import Upload from '../Upload/Upload';
import styles from './Blurb.css';
// import 'reactjs-popup/dist/index.css';

const Blurb = () => {
  const mapLocation = useMapLocation();

  const blurbNodes = songs.map((song) => {
    if (mapLocation === song.mapLocation) {
      return <section key={song.title}>
        <p>{song.description}</p>
        <p>{song.upload}</p>
      </section>;
    }
  });

  return (
    <div className={styles.blurbContainer}>
      <section className={styles.Blurb}>
        {blurbNodes}
        {!mapLocation && 
        <section>
          <p>{aboutSite.description.main}</p>
          <p>{aboutSite.description.record}</p>
          <p>{aboutSite.description.footer}</p>
        </section>} 
        {mapLocation && 
      <Popup 
        modal
        closeOnDocumentClick={true}
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.4)' }}
        trigger={open => (
          <button open={open}>UPLOAD</button>
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
