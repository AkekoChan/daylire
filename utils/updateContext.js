// UpdateContext.js
import React, { createContext, useContext, useState, useCallback } from "react";

const UpdateContext = createContext();

export const UpdateProvider = ({ children }) => {
  const [update, setUpdate] = useState(false);

  const forceUpdate = useCallback(() => {
    setUpdate((prevUpdate) => !prevUpdate);
  }, []);

  return (
    <UpdateContext.Provider value={{ update, forceUpdate }}>
      {children}
    </UpdateContext.Provider>
  );
};

export const useUpdateContext = () => {
  return useContext(UpdateContext);
};
