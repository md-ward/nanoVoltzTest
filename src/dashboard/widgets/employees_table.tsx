import { faCloud, faPrint, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { employeesData } from "../data/dummy_data";

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
function printTableAsPdf(tableRef: React.MutableRefObject<GridApiCommunity>) {
  
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
              onClick={() => button.fun()}
            >
              <FontAwesomeIcon icon={button.icon} />
            </div>
          ))}
          <div
            className="cursor-pointer"
            onClick={() => printTableAsPdf(tableRef)}
          >
            <FontAwesomeIcon icon={faPrint} />
          </div>
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
