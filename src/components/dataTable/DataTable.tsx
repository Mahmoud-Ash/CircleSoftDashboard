import { createTheme, ThemeProvider } from "@mui/material";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";
import type {} from "@mui/x-data-grid/themeAugmentation";
import useGetUsers from "../../hooks/useGetUsers";
import { User } from "../../lib/types";
import { columns } from "../../lib/constants";

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
          // "& .MuiDataGrid-footerContainer": {
          //   display: "none",
          // },
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
  const [data, isLoading] = useGetUsers();

  const rows = Array.isArray(data)
    ? [
        ...data.map((user: User) => {
          return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            address: user.address.city,
            company: user.company.name,
          };
        }),
      ]
    : undefined;

  return isLoading ? (
    <div className='w-full text-center font-bold text-xl text-[#16C098]'>
      Loading Data ...
    </div>
  ) : (
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
