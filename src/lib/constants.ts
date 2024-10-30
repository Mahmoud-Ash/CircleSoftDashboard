import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 130 },
  { field: "username", headerName: "User Name", width: 110 },
  { field: "email", headerName: "Email", width: 180 },
  { field: "address", headerName: "Address", width: 150 },
  { field: "company", headerName: "Company", width: 160 },
];

// const rows: GridRowsProp = [
//   {
//     id: 1,
//     name: "Justin Lipshutz",
//     image: "image1.png",
//     department: "Marketing",
//     age: 22,
//     disipline: 100,
//     status: "Permanent",
//   },
//   {
//     id: 2,
//     name: "Marcus Culhane",
//     image: "image2.png",
//     department: "Finance",
//     age: 24,
//     disipline: 95,
//     status: "Contract",
//   },
//   {
//     id: 3,
//     name: "Leo Stanton",
//     image: "image3.png",
//     department: "R&D",
//     age: 28,
//     disipline: 89,
//     status: "Permanent",
//   },
// ];

// const columns: GridColDef[] = [
//   {
//     field: "name",
//     headerName: "Employee Name",
//     width: 200,
//     renderCell: params => (
//       <div className='flex items-center gap-[15px] h-full '>
//         <img src={params.row.image} alt='' className='h-full  ' />
//         <span className='font-bold text-[14.5px]'>{params.row.name}</span>
//       </div>
//     ),
//   },
//   { field: "department", headerName: "Department", width: 120 },
//   { field: "age", headerName: "Age", width: 100 },
//   {
//     field: "disipline",
//     headerName: "Disipline",
//     width: 120,
//     renderCell: params => (
//       <p>
//         <span className='text-[#16C098]'>+</span>
//         {params.row.disipline}%
//       </p>
//     ),
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 120,
//     renderCell: params => {
//       return params.row.status === "Permanent" ? (
//         <span className='text-[#16C098] bg-[#16c0982f] px-2 py-1 rounded w-full '>
//           {params.row.status}
//         </span>
//       ) : (
//         <span className='text-[#5C5C5C] bg-[#AFAFAF2f] px-2 py-1 rounded w-full '>
//           {params.row.status}
//         </span>
//       );
//     },
//   },
// ];