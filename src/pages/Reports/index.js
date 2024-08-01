import { FormControl, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import { useState } from "react";
import apiInstance from "../../services/api";
import ReportsDataTable from "../../components/ReportsDataTable";

const reportOptions = [
    { api: 'inward-items', text: 'Inward', id: 1 },
    { api: 'parts', text: 'Parts', id: 2 },
    { api: 'locations', text: 'Locations', id: 3 },
    { api: 'putaway', text: 'Putaway', id: 4 },
    { api: 'picklist', text: 'Picklist', id: 5 }
]


const ReportsPage = () => {

    const [reportsData, setReportsData] = useState({});
    const onReportOptionSelected = (e) => {
        const option = JSON.parse(e.target.value)
        fetchReportData(option)
    }


    const fetchReportData = async (reportOption) => {
        try {
            const res = await apiInstance.get(`${reportOption.api}/reports`)
            setReportsData({ ...res.data })
        } catch (error) {

        }
    }
    console.log({reportsData})
    const { columns, rows } = reportsData
    return (
        <Paper style={{ padding: 10 }}>
            <FormControl fullWidth margin="normal">

                <InputLabel>Select Report</InputLabel>
                <Select onChange={onReportOptionSelected}>
                    {reportOptions.map((reportOption) => {
                        const { id, text } = reportOption;
                        return <MenuItem key={id} value={JSON.stringify(reportOption)}>
                            {text}
                        </MenuItem>
                    })}
                </Select>
            </FormControl>

            <ReportsDataTable
                columns={columns || []}
                rows={rows || []}

            />
        </Paper>

    )

}

export default ReportsPage