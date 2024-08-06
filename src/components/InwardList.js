import React, { useContext } from "react";
import { InwardContext } from "../context/InwardContext";
import DataTable from "./DataTable";
import PaperContainer from "./PaperContainer";

const InwardList = () => {
  const { inwardItems } = useContext(InwardContext);
  const columns = [
    { headerName: "Part", field: "part" ,width: 200},
    { headerName: "Quantity", field: "quantity",width: 200 },
    { headerName: "Date", field: "date" ,width: 200},
  ];
  return (
    <PaperContainer>
      <DataTable rows={inwardItems} columns={columns} />
    </PaperContainer>
  );
};

export default InwardList;
