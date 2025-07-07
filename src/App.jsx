import React, {useEffect, useState} from "react";
import Slider from "./components/Slider";
import "./App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://case-api-product-list.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="loading">
        <FontAwesomeIcon icon={faSpinner} spin />
        <p>Yükleniyor...</p>
      </div>
    );

  return (
    <div className="app">
      <h1 className="title">Product List</h1>
      <Slider products={products} />
    </div>
  );
}

export default App;
