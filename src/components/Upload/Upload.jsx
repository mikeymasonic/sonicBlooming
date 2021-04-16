import React from 'react';
import { useMapLocation } from '../../hooks/DataProvider';
import {
  uploads,
} from '../../utils/data';
import styles from './Upload.css';

const Upload = () => {
  const mapLocation = useMapLocation();
  const uploadDescription = uploads[0].description;

  const uploadNodes = uploads.map((upload) => {
    if (mapLocation === upload.mapLocation) {
      return (
        <section key={upload.mapLocation}>
          <h1>Upload {upload.mapLocation}</h1>
          <iframe src={upload.url} width="200"></iframe>
        </section>
      );
    }
  });

  return (
    <section className={styles.Upload}>
      {uploadNodes}
      {uploadDescription}
    </section>
  );
};

export default Upload;
