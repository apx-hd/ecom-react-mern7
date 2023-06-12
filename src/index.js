import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductProvider from "./context/ProductContext";
import ProductDetailProvider from "./context/ProductDetailContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <ProductDetailProvider>
        <App />
      </ProductDetailProvider>
    </ProductProvider>
  </React.StrictMode>
);
