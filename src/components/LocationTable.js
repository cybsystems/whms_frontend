import React, { useContext } from "react";
import { LocationContext } from "../context/LocationContext";
import DataTable from "./DataTable";

const LocationTable = () => {
  const { locations } = useContext(LocationContext);

  const columns = [
    { field: "name", headerName: "Location",width: 200 },
    { field: "description", headerName: "Description",width: 400 },
  ];

  return <DataTable rows={locations} columns={columns} />;
};

export default LocationTable;
