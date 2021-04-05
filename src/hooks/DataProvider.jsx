import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  songOne,
  songTwo,
  songThree,
  songFour,
} from '../utils/data';

const DataContext = createContext();

export const EffectsProvider = ({ children }) => {
  const [songs, setSongs] = useState(songOne);

  const handleSongs = ({ target }) => {
    setSongs(target.value);
  };

  return (
    <DataContext.Provider
      value={{
        songs,
        handleSongs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

EffectsProvider.propTypes = {
  children: PropTypes.node,
};


// state
export const useSongs= () => {
  const { songs } = useContext(DataContext);
  return songs;
};


//handlers
export const useHandleSongs = () => {
  const { handleSongs } = useContext(DataContext);
  return handleSongs;
};
