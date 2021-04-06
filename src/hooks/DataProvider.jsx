import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
// import {
//   songOne,
// } from '../utils/data';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [song, setSong] = useState(null);

  const handleSong = (track) => {
    setSong(track);
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

// get state
export const useSong = () => {
  const { song } = useContext(DataContext);
  return song;
};

// get handlers
export const useHandleSong = () => {
  const { handleSong } = useContext(DataContext);
  return handleSong;
};
