import React, { useContext } from "react";
import { InwardContext } from "../context/InwardContext";
import DataTable from "./DataTable";
import PaperContainer from "./PaperContainer";

const InwardList = () => {
  const { inwardItems } = useContext(InwardContext);
  const columns = [
    { headerName: "Part", field: "part" },
    { headerName: "Quantity", field: "quantity" },
    { headerName: "Date", field: "date" },
  ];
  return (
    <PaperContainer>
      <DataTable rows={inwardItems} columns={columns} />
    </PaperContainer>
  );
};

export default InwardList;
