import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [song, setSong] = useState(null);
  const [mapLocation, setMapLocation] = useState(null);
  const [playerVisible, setPlayerVisible] = useState(false);
  const [visualizerDisplay, setVisualizerDisplay] = useState(false);
  const [onAbout, setOnAbout] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [isFirefox, setIsFirefox] = useState(false);
  const [isIOS13, setIsIOS13] = useState(false);

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

  const handleVisualizerDisplay = (bool) => {
    setVisualizerDisplay(bool);
  };

  const handleOnAbout = (bool) => {
    setOnAbout(bool);
  };

  const handleIsSafari = (bool) => {
    setIsSafari(bool);
  };

  const handleIsFirefox = (bool) => {
    setIsFirefox(bool);
  };

  const handleIsIOS13 = (bool) => {
    setIsIOS13(bool);
  };


  return (
    <DataContext.Provider
      value={{
        song,
        mapLocation,
        playerVisible,
        visualizerDisplay,
        onAbout,
        isSafari,
        isFirefox,
        isIOS13,
        handleSong,
        handleMapLocation,
        handlePlayerVisible,
        handleVisualizerDisplay,
        handleOnAbout,
        handleIsSafari,
        handleIsFirefox,
        handleIsIOS13,
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

export const useVisualizerDisplay = () => {
  const { visualizerDisplay } = useContext(DataContext);
  return visualizerDisplay;
};

export const useOnAbout = () => {
  const { onAbout } = useContext(DataContext);
  return onAbout;
};

export const useIsSafari = () => {
  const { isSafari } = useContext(DataContext);
  return isSafari;
};

export const useIsFirefox = () => {
  const { isFirefox } = useContext(DataContext);
  return isFirefox;
};

export const useIsIOS13 = () => {
  const { isIOS13 } = useContext(DataContext);
  return isIOS13;
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

export const useHandleVisualizerDisplay = () => {
  const { handleVisualizerDisplay } = useContext(DataContext);
  return handleVisualizerDisplay;
};

export const useHandleOnAbout = () => {
  const { handleOnAbout } = useContext(DataContext);
  return handleOnAbout;
};

export const useHandleIsSafari = () => {
  const { handleIsSafari } = useContext(DataContext);
  return handleIsSafari;
};

export const useHandleIsFirefox = () => {
  const { handleIsFirefox } = useContext(DataContext);
  return handleIsFirefox;
};

export const useHandleIsIOS13 = () => {
  const { handleIsIOS13 } = useContext(DataContext);
  return handleIsIOS13;
};

