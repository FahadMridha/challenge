import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // banner for displaying  first page

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1157982761/vector/e-commerce-related-banner-template-with-line-icons-modern-vector-illustration-for.jpg?s=612x612&w=0&k=20&c=iObMpTzGvB03atR79Hw-wvUBm47TLsFClonWSsmP4pg=")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to{" "}
              <span className="text-orange-500  dark:text-white">Best.Com</span>{" "}
            </h1>
            <p className="mb-5">
              Introducing Smart Commerce, your one-stop shop for all your online
              shopping needs. With a vast selection of products and competitive
              prices, we make online shopping easy, convenient, and satisfying.
              Shop with us today and discover the future of e-commerce.
            </p>
            <Link to="/products">
              <button className="btn  bg-orange-500  border-none hover:bg-emerald-700 ">
                More...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
