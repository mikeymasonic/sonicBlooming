import React, { useState } from 'react';
import { useMapLocation } from '../../hooks/DataProvider';
import { uploads } from '../../utils/data';
import styles from './Upload.css';

const Upload = ({ close }) => {
  const mapLocation = useMapLocation();
  const uploadDescription = uploads[0].description;

  const uploadNodes = uploads.map((upload) => {
    if (mapLocation === upload.mapLocation) {
      return (
        <section 
          key={upload.mapLocation}
          className={styles.uploadContainer}>
          <h1>Upload {upload.mapLocation}</h1>
          <iframe src={upload.url} width="90%"></iframe>
        </section>
      );
    }
  });

  return (
    <section className={styles.Upload}>
      {/* <button 
        className={styles.close}
        onClick={close}> */}
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
      {/* </button> */}
      {uploadNodes}
      <div className={styles.description}>
        {uploadDescription}
      </div>
    </section>
  );
};

export default Upload;
