import React, { createContext, useContext, useEffect, useState } from "react";
import apiInstance from "../services/api";
import { AuthContext } from "./AuthContext";

export const PartContext = createContext();

export const PartProvider = ({ children }) => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    apiInstance
      .get("parts")
      .then((response) => setParts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addPart = (part) => {
    apiInstance
      .post("parts", part)
      .then((response) => setParts([...parts, response.data]))
      .catch((error) => console.error(error));
  };

  const updatePart = (index, updatedPart) => {
    const partId = parts[index]._id;

    apiInstance
      .patch(`parts/${partId}`, updatedPart)
      .then((response) => {
        const updatedParts = [...parts];
        updatedParts[index] = response.data;
        setParts(updatedParts);
      })
      .catch((error) => console.error(error));
  };

  return (
    <PartContext.Provider value={{ parts, addPart, updatePart }}>
      {children}
    </PartContext.Provider>
  );
};
