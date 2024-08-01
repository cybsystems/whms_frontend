import DataTable from "./DataTable";

const ReportsDataTable = (props) => {
  const { columns, rows } = props;

  return <DataTable rows={rows} columns={columns} />;
};

export default ReportsDataTable;
