import React from "react";
import { Container, Typography } from "@mui/material";
import InwardForm from "../../components/InwardForm";
import InwardList from "../../components/InwardList";
import { InwardProvider } from "../../context/InwardContext";
import { PartProvider } from "../../context/PartContext";

const Inward = () => {
  return (
    <InwardProvider>
      <PartProvider>
        <Container>
          <Typography variant="h4" gutterBottom>
            Inward
          </Typography>
          <InwardForm />
          <InwardList />
        </Container>
      </PartProvider>
    </InwardProvider>
  );
};

export default Inward;
