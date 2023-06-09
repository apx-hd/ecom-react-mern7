import ProductCard from "../../components/ProductCard";
import { Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function HomeLayout() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/products?APIKey=${process.env.REACT_APP_API_KEY}`
        );
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Box p={10} sx={{ display: "flex", justifyContent: "center" }}>
      {loading && <h1>Loading...</h1>}
      {!loading && error && <h1>Error Occured</h1>}
      {!loading &&
        !error &&
        (data.length > 0 ? (
          <Grid container spacing={4}>
            {data.map((product) => {
              return (
                <Grid item xs={6} md={4} lg={2}>
                  <ProductCard product={product} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <h1>No Data Found</h1>
        ))}
    </Box>
  );
}

export default HomeLayout;
