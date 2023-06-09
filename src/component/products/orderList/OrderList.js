import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";
import Spinner from "../../shared/spinner/Spinner";
import OrderListCard from "./OrderListCard";

const OrderList = () => {
  const { user } = useContext(AuthContext);

  // OrderList see everybody filter by email address

  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://e-commerce-server-three.vercel.app/AllOrders/${user?.email}`
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (!orders.length) {
    return (
      <div className=" flex justify-center items-center my-52">
        <h1 className="text-3xl text-yellow-500">
          No Product Booked!.
          <span className="text-blue-500 underline">
            <Link to="/products"> Please booked any product</Link>
          </span>
        </h1>
      </div>
    );
  }

  return (
    <div className="px-2 my-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {orders?.map((pro) => (
        <OrderListCard
          key={pro._id}
          pro={pro}
          refetch={refetch}
        ></OrderListCard>
      ))}
    </div>
  );
};

export default OrderList;
