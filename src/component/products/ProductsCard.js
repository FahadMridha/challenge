import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ pro }) => {
  const { name, picture, price, details, _id } = pro;
  const shortBody = details.slice(0, 80);

  // product card

  return (
    <div className="card card-compact md:w-80 lg:w-96 mb-4 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img className="object-cover" src={picture} alt="products" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h6 className="card-title text-xl">Price: {price}$</h6>
        <p>{shortBody}...</p>
        <div className="card-actions justify-end mt-5">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
