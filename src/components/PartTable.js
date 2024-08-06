import React, { useContext } from "react";
import { PartContext } from "../context/PartContext";
import DataTable from "./DataTable";

const PartTable = (props) => {
  const { parts } = useContext(PartContext);
  
  const columns = [
    { field: "partNumber", headerName: "Part",width:200 },
    { field: "description", headerName: "Description",width:500 },
    { field: "matrixCode", headerName: "Matrix Code",width:200 },
  ];

  return <DataTable rows={parts} columns={columns} />;
};

export default PartTable;
