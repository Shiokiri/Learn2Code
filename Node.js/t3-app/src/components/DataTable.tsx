import * as React from "react";
import {
  DataGrid,
  type GridColDef,
  type GridValueGetterParams,
} from "@mui/x-data-grid";

import { api } from "@/utils/api";

const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 70 },
  { field: "name", headerName: "名称", width: 130 },
  { field: "time", headerName: "时间", width: 130 },
  { field: "place", headerName: "地点", width: 130 },
  {
    field: "price",
    headerName: "价格",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.name || ""} ${params.row.time || ""}`,
  },
];

const rows = [
  { id: 1, name: "Snow", time: "Jon", price: 35.4343, test: "test" },
  { id: 2, name: "Lannister", time: "Cersei", price: 42 },
  { id: 3, name: "Lannister", time: "Jaime", price: 45 },
  { id: 4, name: "Stark", time: "Arya", price: 16 },
  { id: 5, name: "Targaryen", time: "Daenerys", price: null },
  { id: 6, name: "Melisandre", time: null, price: 150 },
  { id: 7, name: "Clifford", time: "Ferrara", price: 44 },
  { id: 8, name: "Frances", time: "Rossini", price: 36 },
  { id: 9, name: "Roxie", time: "Harvey", price: 65 },
  { id: 10, name: "Roxie", time: "Harvey", price: 65 },
];

export default function DataTable() {
  const course = api.course.getAll.useQuery();
  const courseRows = course.data;

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
