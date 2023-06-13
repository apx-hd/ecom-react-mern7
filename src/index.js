import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductProvider from "./context/ProductContext";
import ProductDetailProvider from "./context/ProductDetailContext";
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductProvider>
        <ProductDetailProvider>
          <App />
        </ProductDetailProvider>
      </ProductProvider>
    </Provider>
  </React.StrictMode>
);
