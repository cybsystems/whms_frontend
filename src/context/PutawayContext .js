import React, { createContext, useEffect, useState } from 'react';
import apiInstance from '../services/api';

export const PutawayContext = createContext();

export const PutawayProvider = ({ children }) => {
  const [putawayItems, setPutawayItems] = useState([]);

  useEffect(() => {
      apiInstance.get('putaway')
        .then(response => setPutawayItems(response.data))
        .catch(error => console.error(error));
    
  }, []);

  return (
    <PutawayContext.Provider value={{ putawayItems }}>
      {children}
    </PutawayContext.Provider>
  );
};
