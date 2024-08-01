import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import apiInstance from "../../services/api";
import PartsModal from "../../components/PartsModal";

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

  return (
    <Paper style={{ padding: 16 }}>
      {selectedPicklist && (
        <PartsModal
          onPickListUpdate={onPickListUpdate}
          onClose={() => setSelectedPicklist(null)}
          pickList={selectedPicklist}
        />
      )}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pickings.map((row) => (
            <TableRow
              style={{ cursor: "pointer" }}
              onClick={() => onRowSelect(row)}
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PickingListPage;
