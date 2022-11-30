import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const URL = "https://restcountries.com/v2/all";

// const rows = [
//   { id: 1, col1: "Hello", col2: "World" },
//   { id: 2, col1: "DataGridPro", col2: "is Awesome" },
//   { id: 3, col1: "MUI", col2: "is Amazing" },
// ];

const columns = [
  {
    field: "id",
    headerName: "Country ID",
    width: 150,
    renderCell: (index) => index.api.getRowIndex(index.row.name),
  },
  { field: "name", headerName: "Country Name", width: 150 },
  { field: "capital", headerName: "Country Capital", width: 150 },
  {
    field: "population",
    headerName: "Countries Population",
    width: 150,
    type: "number",
  },
  {
    field: "flag",
    headerName: "Country Flag",
    width: 150,
    renderCell: (params) => (
      <img src={params.row.flag} alt={params.row.name} width={40} />
    ),
  },
  //   { field: "population", headerName: "Countries Population", width: 150 }
];

export const Home = () => {
  const [countries, setCountries] = useState([]);

  //   const {name, capital, population,  flag}

  const getAllCountries = async () => {
    const response = await axios.get(URL);
    const data = await response.data;
    setCountries(data);
    console.log(data);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row.name}
        rows={countries}
        columns={columns}
      />
    </div>
  );
};
