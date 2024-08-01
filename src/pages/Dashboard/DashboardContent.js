import { Checklist, Inbox, Inventory } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";

import LocationTable from "../../components/LocationTable";
import PartTable from "../../components/PartTable";
import { InwardContext } from "../../context/InwardContext";
import { LocationContext } from "../../context/LocationContext";
import { PartContext } from "../../context/PartContext";
import { PickListContext } from "../../context/PickListContext";
import { PutawayContext } from "../../context/PutawayContext ";

const DashboardCard = ({ title, icon, children }) => {
  return (
    <Card sx={{ boxShadow: 1, borderRadius: 2 }}>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

const DashboardContent = () => {
  const { inwardItems } = useContext(InwardContext);
  const { parts } = useContext(PartContext);
  const { putawayItems } = useContext(PutawayContext);
  const { locations } = useContext(LocationContext);
  const { pickLists } = useContext(PickListContext);

  console.log({pickLists})
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
        <Typography variant="h5" gutterBottom>
          Parts
        </Typography>
        <PartTable hideAction={true} />
      </Grid>
      <Grid container style={{ marginTop: 40 }}>
        <Typography variant="h5" gutterBottom>
          Locations
        </Typography>
        <LocationTable />
      </Grid>
    </Container>
  );
};

export default DashboardContent;
