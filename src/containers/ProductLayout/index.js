import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetailCard from "../../components/ProductDetailCard";

function ProductLayout() {
  const { productID } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/products/${productID}`
        );
        console.log(data);
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
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && error && <h1>Error Occured</h1>}
      {!loading && !error && data && <ProductDetailCard product={data} />}
    </>
  );
}

export default ProductLayout;
