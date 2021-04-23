import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // const [song, setSong] = useState('../mp3/example2.mp3');
  const [song, setSong] = useState(null);
  const [mapLocation, setMapLocation] = useState(null);
  const [playerVisible, setPlayerVisible] = useState(false);
  const [playerContext, setPlayerContext] = useState('dink');

  const handleSong = (track) => {
    setSong(track);
    setMapLocation(track.mapLocation);
  };

  const handleMapLocation = (location) => {
    setMapLocation(location);
  };

  const handlePlayerVisible = (bool) => {
    setPlayerVisible(bool);
  };

  const handlePlayerContext = (ref) => {
    setPlayerContext(ref);
  };

  return (
    <DataContext.Provider
      value={{
        song,
        mapLocation,
        playerVisible,
        playerContext,
        handleSong,
        handleMapLocation,
        handlePlayerVisible,
        handlePlayerContext,
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

export const useMapLocation = () => {
  const { mapLocation } = useContext(DataContext);
  return mapLocation;
};

export const usePlayerVisible = () => {
  const { playerVisible } = useContext(DataContext);
  return playerVisible;
};

export const usePlayerContext = () => {
  const { playerContext } = useContext(DataContext);
  return playerContext;
};

// get handlers
export const useHandleSong = () => {
  const { handleSong } = useContext(DataContext);
  return handleSong;
};

export const useHandleMapLocation = () => {
  const { handleMapLocation } = useContext(DataContext);
  return handleMapLocation;
};

export const useHandlePlayerVisible = () => {
  const { handlePlayerVisible } = useContext(DataContext);
  return handlePlayerVisible;
};

export const useHandlePlayerContext = () => {
  const { handlePlayerContext } = useContext(DataContext);
  return handlePlayerContext;
};

