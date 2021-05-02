import React from 'react';
import Blurb from '../Blurb/Blurb';
import { useHandleMapLocation, useHandleSong, useHandlePlayerVisible, useOnAbout, usePlayerVisible } from '../../hooks/DataProvider';
import {
  songs,
} from '../../utils/data';
import styles from './Map.css';

function Map() {
  const handleSong = useHandleSong();
  const handleMapLocation = useHandleMapLocation();
  const handlePlayerVisible = useHandlePlayerVisible();
  const onAbout = useOnAbout();
  const playerVisible = usePlayerVisible();

  return (
    <section className={styles.mapContainer}>
      {!onAbout && !playerVisible && <Blurb />}
      {!playerVisible && !onAbout && <p className={styles.instructions}>---<br/><br/>Select a garden to listen to:</p>} 
      <section 
        className={styles.mapClass}>
        <svg
          xmlns="http://purl.org/dc/elements/1.1/"
          version="1.1"
          id="svg10" 
          width="100vw"
          height="100%"
          viewBox="0 0 1225 758">
          <g>
            <a onClick={() => {
              handleSong(songs[0]);
              handleMapLocation('Amphitheater');
              handlePlayerVisible(true);
            }}>
              <title>Amphitheater</title>
              <path
                d="m 75.686499,119.13616 178.003431,1.4016 8.40961,12.61441 v 40.64646 l 88.30092,1.4016 -1.4016,28.03204 -46.25286,37.84324 v 29.43364 h 28.03203 v 22.42563 l -37.84325,37.84325 -46.25286,15.41762 -49.05606,7.00801 H 137.35698 L 92.505721,341.99085 40.646453,323.77002 22.425629,297.13959 15.41762,280.32037 14.016018,269.10755 H 50.457666 V 242.47712 L 9.8112128,217.24828 2.8032037,204.63387 1.4016018,173.79863 H 70.080092 v -54.66247 z" />
            </a>
          </g>
          <g>
            <a onClick={() => {
              handleSong(songs[1]);
              handleMapLocation('Royal Rosarian Garden');
              handlePlayerVisible(true);
            }}>
              <title>Royal Rosarian Garden</title>
              <path
                d="M 1020.2966,480.19828 H 1187.351 V 691.51215 H 1019.9638 Z" />
            </a>
          </g>
          <g>
            <a onClick={() => {
              handleSong(songs[2]);
              handleMapLocation('Rose Test Garden');
              handlePlayerVisible(true);
            }}>
              <title>Rose Test Garden</title>
              <path
                d="M 968.35798,691.5188 V 71.816023 H 425.10452 V 179.54006 l -2.31664,42.85795 -17.37485,39.38298 -11.58323,27.79975 -4.63329,11.58323 v 389.19651 z"/>
            </a>
          </g>

          <g>
            <a onClick={() => {
              handleSong(songs[3]);
              handleMapLocation('Shakespearean Garden');
              handlePlayerVisible(true);
            }}>
              <title>Shakespearean Garden</title>
              <path
                d="M 979.48986,76.677237 H 1210.7583 V 207.77058 H 978.8715 V 76.677237 Z" />
            </a>
          </g>

          <g>
            <a onClick={() => {
              handleSong(songs[4]);
              handleMapLocation('Gold Medal Garden');
              handlePlayerVisible(true);
            }}>
              <title>Gold Medal Garden</title>
              <path
                d="m 1056.7855,220.13787 h 95.8465 l 23.4979,40.81208 h 45.759 v 74.20378 h -45.759 l -24.1163,40.81208 h -95.2281 l -23.4979,-40.19372 h -41.43044 v -72.96705 h 40.19374 z" />
            </a>
          </g>
        </svg>
      </section>
      {!onAbout && playerVisible && <Blurb />}
    </section>
  );
}

export default Map;
