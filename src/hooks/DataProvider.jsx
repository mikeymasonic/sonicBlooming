import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  songOne,
} from '../utils/data';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [song, setSong] = useState(songOne);

  const handleSong = (thing) => {
    setSong(thing);
    // console.log('inside handleSongs')
  };

  return (
    <DataContext.Provider
      value={{
        song,
        handleSong,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

// state
export const useSong = () => {
  const { song } = useContext(DataContext);
  console.log('ding', song);
  return song;
};

//handlers
export const useHandleSong = () => {
  const { handleSong } = useContext(DataContext);
  // console.log('donk', handleSongs)
  return handleSong;
};
