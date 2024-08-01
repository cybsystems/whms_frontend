import { Paper } from "@mui/material";
import React from "react";

const PaperContainer = (props) => {
  const { style, children } = props;
  return (
    <Paper style={style || { padding: 20, width: "100%" }}>{children}</Paper>
  );
};

export default PaperContainer;
