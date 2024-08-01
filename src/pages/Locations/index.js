import React, { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import LocationTable from "../../components/LocationTable";
import AddLocationPopup from "../../components/AddLocationPopup";
import { LocationProvider } from "../../context/LocationContext";

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
        <LocationTable />
        {showAddLocationPopup && (
          <AddLocationPopup closePopup={() => setShowAddLocationPopup(false)} />
        )}
      </Container>
    </LocationProvider>
  );
};

export default Locations;
