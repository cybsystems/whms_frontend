import { Checklist, Inbox, Inventory } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import React, { useContext } from "react";

import LocationTable from "../../components/LocationTable";
import PaperContainer from "../../components/PaperContainer";
import PartTable from "../../components/PartTable";
import { InwardContext } from "../../context/InwardContext";
import { LocationContext } from "../../context/LocationContext";
import { PartContext } from "../../context/PartContext";
import { PickListContext } from "../../context/PickListContext";

const DashboardCard = ({ title, icon, children }) => {
  return (
    <Paper style={{ padding: 20, borderRadius: 5 }}>
      <>
        <Box display="flex" alignItems="center" mb={2}>
          {icon}
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="h2" component="div" sx={{ mr: 2 }}>
            {children}
          </Typography>
        </Box>
      </>
    </Paper>
  );
};

const DashboardContent = () => {
  const { inwardItems } = useContext(InwardContext);
  const { parts } = useContext(PartContext);
  const { locations } = useContext(LocationContext);
  const { pickLists } = useContext(PickListContext);

  return (
    <Container style={{ maxHeight: "100%", overflow: "scroll" }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <DashboardCard
            title={"Parts"}
            icon={
              <Inventory sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
            }
          >
            {parts.length}
          </DashboardCard>
        </Grid>

        <Grid item xs={12} lg={3}>
          <DashboardCard
            title={"Locations"}
            icon={
              <Inventory sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
            }
          >
            {locations.length}
          </DashboardCard>
        </Grid>

        <Grid item xs={12} lg={3}>
          <DashboardCard
            title={"Inwards"}
            icon={<Inbox sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />}
          >
            {inwardItems.length}
          </DashboardCard>
        </Grid>

        <Grid item xs={12} lg={3}>
          <DashboardCard
            title={"Picklists"}
            icon={
              <Checklist sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
            }
          >
            {pickLists.length}
          </DashboardCard>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: 40 }}>
        <PaperContainer>
          <Typography variant="h5" gutterBottom>
            Parts
          </Typography>
          <PartTable hideAction={true} />
        </PaperContainer>
      </Grid>
      <Grid container style={{ marginTop: 40 }}>
        <PaperContainer style={{ padding: 20, width: "100%" }}>
          <Typography variant="h5" gutterBottom>
            Locations
          </Typography>
          <LocationTable />
        </PaperContainer>
      </Grid>
    </Container>
  );
};

export default DashboardContent;
