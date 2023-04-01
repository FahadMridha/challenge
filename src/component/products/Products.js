import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../shared/spinner/Spinner";
import ProductCard from "./ProductsCard";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // load all products, see everybody

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://e-commerce-server-three.vercel.app/products")
      .then((data) => {
        setAllProducts(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="px-2 my-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {allProducts.map((pro) => (
        <ProductCard key={pro._id} pro={pro} />
      ))}
    </div>
  );
};

export default Products;
