import React, { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import LocationTable from "../../components/LocationTable";
import AddLocationPopup from "../../components/AddLocationPopup";
import { LocationProvider } from "../../context/LocationContext";
import PaperContainer from "../../components/PaperContainer";

const Locations = () => {
  const [showAddLocationPopup, setShowAddLocationPopup] = useState(false);

  return (
    <LocationProvider>
      <Container>
        <Typography variant="h4" gutterBottom>
          Locations
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowAddLocationPopup(true)}
        >
          Add Location
        </Button>
        <PaperContainer>
          <LocationTable />
        </PaperContainer>
        {showAddLocationPopup && (
          <AddLocationPopup closePopup={() => setShowAddLocationPopup(false)} />
        )}
      </Container>
    </LocationProvider>
  );
};

export default Locations;
