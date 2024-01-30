// AppContext.js (Create a separate context file)
import React, { createContext, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Provide the required context values here
  const contextValue = {
    basename: '/my-app', // Adjust this value based on your app configuration
    // Other context values...
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
