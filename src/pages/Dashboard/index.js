import React from "react";
import { InwardProvider } from "../../context/InwardContext";
import { LocationProvider } from "../../context/LocationContext";
import { PartProvider } from "../../context/PartContext";
import DashboardContent from "./DashboardContent";
import { PutawayProvider } from "../../context/PutawayContext ";
import { PickListProvider } from "../../context/PickListContext";

const Dashboard = () => {
  return (
    <PartProvider>
      <LocationProvider>
        <InwardProvider>
          <PutawayProvider>
            <PickListProvider>
              <DashboardContent />
            </PickListProvider>
          </PutawayProvider>
        </InwardProvider>
      </LocationProvider>
    </PartProvider>
  );
};

export default Dashboard;
