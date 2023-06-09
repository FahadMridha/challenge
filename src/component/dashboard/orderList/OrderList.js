import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../../shared/spinner/Spinner";

const AdminOrderList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // only admin see all orders

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://e-commerce-server-three.vercel.app/adminAllOrder", {
        headers: {
          authorization: `bearer ${localStorage.getItem("commerceToken")}`,
        },
      })
      .then((data) => {
        setAllProducts(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!allProducts?.length) {
    return (
      <div className=" flex justify-center items-center my-52">
        <h1 className="text-3xl font-bold text-blue-600">
          No Order Products Available!
        </h1>
      </div>
    );
  }

  return (
    <div className="p-2 lg:mx-16 mb-16 z-0">
      <h1 className="my-5 text-center text-orange-500  font-bold text-3xl">
        Order Product List
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {allProducts?.map((pro, i) => (
              <tr key={pro._id} className="hover">
                <th>{i + 1}</th>
                <td>{pro.name}</td>
                <td>
                  <img src={pro.picture} className="w-16 h-16" alt="" />
                </td>
                <td>{pro.price} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrderList;
