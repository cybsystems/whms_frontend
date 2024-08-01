import React, { createContext, useContext, useEffect, useState } from "react";
import apiInstance from "../services/api";
import { AuthContext } from "./AuthContext";

export const InwardContext = createContext();

export const InwardProvider = ({ children }) => {
  const [inwardItems, setInwardItems] = useState([]);

  useEffect(() => {
    apiInstance
      .get("inward-items")
      .then((response) => setInwardItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addInwardItem = (item) => {
    apiInstance
      .post("inward-items", item)
      .then((response) => setInwardItems([...inwardItems, response.data]))
      .catch((error) => console.error(error));
  };

  return (
    <InwardContext.Provider value={{ inwardItems, addInwardItem }}>
      {children}
    </InwardContext.Provider>
  );
};
