import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "phone", headerName: "Phone", width: 130 },
  { field: "applied", headerName: "Applied", width: 120 },
  { field: "shift", headerName: "Shift", width: 120 },
  { field: "substitution", headerName: "Substitution", width: 120 },
  { field: "status", headerName: "Status", width: 120 },
  { field: "comments", headerName: "Comments", width: 200 },
];

const rows = [
  {
    id: 1,
    name: "Jon Snow",
    phone: "123-456-7890",
    applied: "Yes",
    shift: "Morning",
    substitution: "None",
    status: "Active",
    comments: "N/A",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    phone: "987-654-3210",
    applied: "No",
    shift: "Evening",
    substitution: "None",
    status: "Inactive",
    comments: "N/A",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    phone: "555-555-5555",
    applied: "Yes",
    shift: "Night",
    substitution: "None",
    status: "Active",
    comments: "N/A",
  },
  {
    id: 4,
    name: "Arya Stark",
    phone: "111-222-3333",
    applied: "Yes",
    shift: "Morning",
    substitution: "None",
    status: "Active",
    comments: "N/A",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    phone: "444-444-4444",
    applied: "Yes",
    shift: "Night",
    substitution: "None",
    status: "Active",
    comments: "N/A",
  },
  {
    id: 6,
    name: "Melisandre",
    phone: "999-999-9999",
    applied: "Yes",
    shift: "Morning",
    substitution: "None",
    status: "Active",
    comments: "N/A",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    phone: "777-777-7777",
    applied: "No",
    shift: "Evening",
    substitution: "None",
    status: "Inactive",
    comments: "N/A",
  },
  {
    id: 8,
    name: "Rossini Frances",
    phone: "888-888-8888",
    applied: "Yes",
    shift: "Night",
    substitution: "None",
    status: "Active",
    comments: "N/A",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    phone: "666-666-6666",
    applied: "No",
    shift: "Morning",
    substitution: "None",
    status: "Inactive",
    comments: "N/A",
  },
  {
    id: 10,
    name: "Jack Roxie",
    phone: "986-666-6666",
    applied: "Yes",
    shift: "Night",
    substitution: "None",
    status: "Inactive",
    comments: "N/A",
  },
  {
    id: 11,
    name: "Adam Roxie",
    phone: "666-680-6666",
    applied: "No",
    shift: "Morning",
    substitution: "None",
    status: "Active",
    comments: "N/A",
  },
];

export default function DataTable() {
  return (
    <div className="mx-auto h-fit w-full overflow-hidden bg-white p-2 rounded-md ">
          <DataGrid
              
        filterMode="server"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
