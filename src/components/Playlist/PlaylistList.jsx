import React from 'react';
import PropTypes from 'prop-types';
import { useHandleSong } from '../../hooks/DataProvider';
// import Modal from 'react-modal';
// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from '../../styles/styles.scss';
import {
  songs,
} from '../../utils/data';
import styles from './PlaylistList.css';


const PlaylistList = () => {
  const handleSong = useHandleSong();

  const songNodes = songs.mapLocations.map((song) => {
    return <a key={song.title} onClick={() => handleSong(song)}>{song.title}</a>;
  });

  return (
    <section className={styles.PlaylistList}>
      {...songNodes}
    </section>
  );
};

PlaylistList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PlaylistList;
