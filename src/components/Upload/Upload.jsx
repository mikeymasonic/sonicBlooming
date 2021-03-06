import React from 'react';
import { useMapLocation } from '../../hooks/DataProvider';
import PropTypes from 'prop-types';
import { uploads } from '../../utils/data';
import styles from './Upload.css';

const Upload = ({ close }) => {
  const mapLocation = useMapLocation();
  const uploadDescription = uploads[0].description;

  const uploadNodes = uploads.map((upload) => {
    if (mapLocation === upload.mapLocation) {
      return (
        <section key={upload.mapLocation} className={styles.uploadContainer}>
          <h1>Upload for <br/>{upload.mapLocation}</h1>
          <section className={styles.description}>
            <ul>
              <li>{uploadDescription.record}</li>
              <li>{uploadDescription.choose}</li>
              <li>{uploadDescription.open}</li>
              <li>{uploadDescription.upload}</li>
            </ul>
          </section>
          <iframe src={upload.url}></iframe>
        </section>
      );
    }
  });

  return (
    <section className={styles.Upload}>
      <svg 
        className={styles.close} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        height='1.5em'
        onClick={close}>
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M6 18L18 6M6 6l12 12" />
      </svg>
      {uploadNodes}
    </section>
  );
};

Upload.propTypes = {
  close: PropTypes.func,
};

export default Upload;
