import React from 'react';
import { useMapLocation } from '../../hooks/DataProvider';
import {
  uploads,
} from '../../utils/data';
import styles from './Upload.css';

const Upload = () => {
  const mapLocation = useMapLocation();

  const uploadNodes = uploads.map((upload) => {
    if (mapLocation === upload.mapLocation) {
      return (
        <>
          <h1>Upload {upload.mapLocation}</h1>
          <iframe src={upload.url} width="500"></iframe>;
        </>
      );
    }
  });

  return (
    <section className={styles.Upload}>
      
      {uploadNodes}

    </section>
  );
};

export default Upload;
