import { createTheme, ThemeProvider } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import type {} from "@mui/x-data-grid/themeAugmentation";

const rows: GridRowsProp = [
  {
    id: 1,
    name: "Justin Lipshutz",
    image: "image1.png",
    department: "Marketing",
    age: 22,
    disipline: 100,
    status: "Permanent",
  },
  {
    id: 2,
    name: "Marcus Culhane",
    image: "image2.png",
    department: "Finance",
    age: 24,
    disipline: 95,
    status: "Contract",
  },
  {
    id: 3,
    name: "Leo Stanton",
    image: "image3.png",
    department: "R&D",
    age: 28,
    disipline: 89,
    status: "Permanent",
  },
];

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Employee Name",
    width: 200,
    renderCell: params => (
      <div className='flex items-center gap-[15px] h-full '>
        <img src={params.row.image} alt='' className='h-full  ' />
        <span className='font-bold text-[14.5px]'>{params.row.name}</span>
      </div>
    ),
  },
  { field: "department", headerName: "Department", width: 120 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "disipline",
    headerName: "Disipline",
    width: 120,
    renderCell: params => (
      <p>
        <span className='text-[#16C098]'>+</span>
        {params.row.disipline}%
      </p>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: params => {
      return params.row.status === "Permanent" ? (
        <span className='text-[#16C098] bg-[#16c0982f] px-2 py-1 rounded w-full '>
          {params.row.status}
        </span>
      ) : (
        <span className='text-[#5C5C5C] bg-[#AFAFAF2f] px-2 py-1 rounded w-full '>
          {params.row.status}
        </span>
      );
    },
  },
];

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          maxHeight: "fit-content",
          backgroundColor: "white",
          border: "none",
          fontWeight: "bold",
          fontSize: "14px",
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            display: "none",
          },
        },
        columnHeader: {
          color: "#949494",
          fontSize: "14.5px",
        },
      },
    },
  },
});

function Toolbar() {
  return (
    <div className='flex items-center justify-between pr-[50px] pl-2'>
      <h1 className='text-[20px] font-bold'>Employee Status</h1>
      <GridToolbarFilterButton />
    </div>
  );
}

const DataTable = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} p-[27px] bg-[#FFFFFF] border-2 border-[#ECEEF6] rounded-md w-full overflow-auto `}
    >
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: Toolbar,
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
              },
            },
          }}
          pageSizeOptions={[3]}
          disableRowSelectionOnClick
        />
      </ThemeProvider>
    </div>
  );
};

export default DataTable;
