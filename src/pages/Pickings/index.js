import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import PartsModal from "../../components/PartsModal";
import apiInstance from "../../services/api";
import DataTable from "../../components/DataTable";

const PickingListPage = (props) => {
  const [pickings, setPickings] = useState([]);
  const [selectedPicklist, setSelectedPicklist] = useState(null);

  const fetchPickings = async () => {
    try {
      const pickingsRes = await apiInstance.get("picklist");
      setPickings(pickingsRes.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPickings();
  }, []);

  const onRowSelect = (picklist) => {
    setSelectedPicklist(picklist);
  };

  const onPickListUpdate = async (parts) => {
    try {
      const isComplete = selectedPicklist.parts.length === parts.length;
      await apiInstance.put(`picklist/${selectedPicklist._id}`, {
        parts,
        isComplete,
      });
      setSelectedPicklist(null);
      fetchPickings();
    } catch (error) {}
  };
  const columns = [{ headerName: "Name", field: "name",width: 500 }];
  return (
    <Paper style={{ padding: 16 }}>
      {selectedPicklist && (
        <PartsModal
          onPickListUpdate={onPickListUpdate}
          onClose={() => setSelectedPicklist(null)}
          pickList={selectedPicklist}
        />
      )}
      <DataTable
        rows={pickings}
        columns={columns}
        onRowClick={({row}) => {
          onRowSelect(row)
        }}
      />
    </Paper>
  );
};

export default PickingListPage;
