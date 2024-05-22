// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    families: [],
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);

