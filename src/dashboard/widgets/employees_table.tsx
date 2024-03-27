import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import { employeesData } from "../data/dummy_data";
import { faCloud, faPrint, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

// ! used ref to access table data and print
function printTableAsPdf(tableRef: { current: any }) {
  const input = tableRef.current;
  input.exportDataAsPrint();
}

//! icon buttons in the table harder
const iconButtons = [
  {
    id: "search",
    icon: faSearch,
    fun: () => {
      alert("search logic");
    },
  },
  {
    id: "save",
    icon: faCloud,
    fun: () => {
      alert("Save / Sync to cloud");
    },
  },
  {
    id: "print",
    icon: faPrint,
    fun: (tableRef: any) => {
      printTableAsPdf(tableRef);
    },
  },
];

export default function EmployeesDataTable() {
  const tableRef = useGridApiRef();

  return (
    <div className="h-96 rounded-md bg-white p-2">
      <section className="flex flex-row justify-between px-2">
        <h1>Employee</h1>
        <div className="flex w-1/3 justify-end gap-9">
          {iconButtons.map((button) => (
            <div
              className="cursor-pointer"
              key={button.id}
              onClick={() =>
                button.id !== "print" ? button.fun() : button.fun(tableRef)
              }
            >
              <FontAwesomeIcon icon={button.icon} />
            </div>
          ))}
        </div>
      </section>

      <DataGrid
        apiRef={tableRef}
        filterMode="server"
        rows={employeesData}
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
