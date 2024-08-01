import React, { createContext, useContext, useEffect, useState } from "react";
import apiInstance from "../services/api";
import { AuthContext } from "./AuthContext";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    apiInstance
      .get("locations")
      .then((response) => setLocations(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addLocation = (location) => {
    apiInstance
      .post("locations", location)
      .then((response) => setLocations([...locations, response.data]))
      .catch((error) => console.error(error));
  };

  const updateLocation = (index, updatedLocation) => {
    const locationId = locations[index]._id;
    apiInstance
      .patch(`locations/${locationId}`, updatedLocation)
      .then((response) => {
        const updatedLocations = [...locations];
        updatedLocations[index] = response.data;
        setLocations(updatedLocations);
      })
      .catch((error) => console.error(error));
  };

  return (
    <LocationContext.Provider
      value={{ locations, addLocation, updateLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};
