import React, { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import PartTable from "../../components/PartTable";
import AddPartPopup from "../../components/AddPartPopup";
import { PartProvider } from "../../context/PartContext";

const Parts = () => {
  const [showAddPartPopup, setShowAddPartPopup] = useState(false);

  return (
    <PartProvider>
      <Container>
        <Typography variant="h4" gutterBottom>
          Parts
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowAddPartPopup(true)}
        >
          Add Part
        </Button>
        <PartTable />
        {showAddPartPopup && (
          <AddPartPopup closePopup={() => setShowAddPartPopup(false)} />
        )}
      </Container>
    </PartProvider>
  );
};

export default Parts;
