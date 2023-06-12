import ProductCard from "../../components/ProductCard";
import { Grid, Box } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useFetch } from "../../hooks";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ProductContext } from "../../context/ProductContext";


function HomeLayout() {
  const { data, loading, error, category, handleChange } = useContext(ProductContext);

  return (
    <Box p={10} sx={{ display: "flex", justifyContent: "center" }}>
      {loading && <h1>Loading...</h1>}
      {!loading && error && <h1>Error Occured</h1>}
      {!loading &&
        !error &&
        (data.length > 0 ? (
          <Box
            display="flex"
            flexDirection={"column"}
            gap={5}
            alignItems={"flex-end"}
          >
            <Box sx={{ minWidth: 300 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={"jewelery"}>Jewelery</MenuItem>
                  <MenuItem value={"electronics"}>Electronics</MenuItem>
                  <MenuItem value={"men's clothing"}>Men's Clothing</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Grid container spacing={4}>
              {data.map((product) => {
                return (
                  <Grid item xs={6} md={4} lg={2}>
                    <ProductCard product={product} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        ) : (
          <h1>No Data Found</h1>
        ))}
    </Box>
  );
}

export default HomeLayout;
