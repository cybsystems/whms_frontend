import React, { createContext, useEffect, useState } from 'react';
import apiInstance from '../services/api';

export const PickListContext = createContext();

export const PickListProvider = ({ children }) => {
  const [pickLists, setPickLists] = useState([]);

  useEffect(() => {
      apiInstance.get('picklist')
        .then(response => setPickLists(response.data))
        .catch(error => console.error(error));
    
  }, []);
  return (
    <PickListContext.Provider value={{ pickLists, setPickLists }}>
      {children}
    </PickListContext.Provider>
  );
};
