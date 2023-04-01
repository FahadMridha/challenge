import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold md:tracking-tight mt-8 md:text-5xl">
        <span className="text-red-700">Welcome</span> to{" "}
        <span className="text-green-700">To Admin Dashboard </span>
      </h1>
      <div className="md:w-96 mx-auto p-2 px-5 my-10">
        <div className="">
          <Link to="/dashboard/customerList">
            <button className="btn btn-active bg-orange-500  border-none hover:bg-orange-600  w-full mb-3">
              Customer List
            </button>
          </Link>

          <Link to="/dashboard/productList">
            <button className="btn btn-active btn-ghost  w-full mb-3">
              Product List
            </button>
          </Link>

          <Link to="/dashboard/adminAllOrder">
            <button className="btn btn-active bg-orange-500  border-none hover:bg-orange-600 w-full mb-3">
              Order List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
