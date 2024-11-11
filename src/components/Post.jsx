import React, { useContext, useEffect, useState } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { useAuth } from "./ContextApi";
import { Link } from "react-router-dom";

const Post = ({ allPage, activeGrid, categoryFilter, priceShow }) => {
  let Data = useAuth();
  let [filterShow, setFilterShow] = useState([]);
  let [count, setCount] = useState(true);

  useEffect(() => {
    let fiveFilter = categoryFilter.slice(0, 5);
    setFilterShow(fiveFilter);
  }, [categoryFilter]);

  let handleSee = () => {
    setFilterShow(categoryFilter);
    setCount(false);
  };
  let handleSeeLess = () => {
    let fiveFilter = categoryFilter.slice(0, 5);
    setFilterShow(fiveFilter);
    setCount(true);
  };

  return (
    <>
      {filterShow.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-start gap-2">
            {filterShow.map((item) => (
              <div
                key={item.id}
                className={`${
                  activeGrid === "active"
                    ? "w-full flex items-center p-4 bg-white shadow-lg rounded-lg"
                    : "w-[32%] p-4 bg-white shadow-lg rounded-lg"
                }`}
              >
                <div
                  className={`${
                    activeGrid === "active" ? "w-1/4" : "w-full h-[220px]"
                  } overflow-hidden rounded-lg relative group`}
                >
                  <Link to={`/shop/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      alt="Product"
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    />
                  </Link>
                </div>

                <div
                  className={`${
                    activeGrid === "active"
                      ? "ml-6 w-3/4 flex flex-col justify-between"
                      : "w-full mt-4"
                  }`}
                >
                  <Link to={`/shop/${item.id}`}>
                    <div className="flex flex-col">
                      <h3 className="text-[#262626] font-bold text-[16px] font-sans truncate">
                        {item.title}
                      </h3>
                      <h5 className="text-[#262626] font-normal text-[14px] font-sans truncate">
                        {item.brand}
                      </h5>
                    </div>
                  </Link>
                  <p className="text-[#262626] font-bold text-[16px] font-sans mt-2">
                    $ {item.price}
                  </p>

                  {activeGrid === "active" && (
                    <ul className="flex gap-4 mt-4">
                      <li className="flex items-center text-gray-700 hover:text-red-500 transition duration-200 cursor-pointer">
                        <FaHeart className="mr-1" /> Wish List
                      </li>
                      <li className="flex items-center text-gray-700 hover:text-blue-500 transition duration-200 cursor-pointer">
                        <IoGitCompare className="mr-1" /> Compare
                      </li>
                      <li className="flex items-center text-gray-700 hover:text-green-500 transition duration-200 cursor-pointer">
                        <FaCartPlus className="mr-1" /> Add to Cart
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="">
            {count
              ? categoryFilter.length > 5 && (
                  <div onClick={handleSee} className="pt-10">
                    <button className="h-[50px] w-[200px] font-sans font-bold text-[14px] border-[2px] border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300">
                      See More
                    </button>
                  </div>
                )
              : categoryFilter.length > 5 && (
                  <div onClick={handleSeeLess} className="pt-10">
                    <button className="h-[50px] w-[200px] font-sans font-bold text-[14px] border-[2px] border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300">
                      See Less
                    </button>
                  </div>
                )}
          </div>
        </>
      ) : (
        <div
          className={`${
            activeGrid === "active"
              ? "flex flex-col gap-6 mt-5"
              : "flex flex-wrap gap-4 mt-5"
          }`}
        >
          {allPage.map((item) => (
            <div
              key={item.id}
              className={`${
                activeGrid === "active"
                  ? "w-full flex items-center p-4 bg-white shadow-lg rounded-lg"
                  : "w-[32%] p-4 bg-white shadow-lg rounded-lg"
              }`}
            >
              <div
                className={`${
                  activeGrid === "active" ? "w-1/4" : "w-full h-[220px]"
                } overflow-hidden rounded-lg relative group`}
              >
                <Link to={`/shop/${item.id}`}>
                  <img
                    src={item.thumbnail}
                    alt="Product"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  />
                </Link>
              </div>

              <div
                className={`${
                  activeGrid === "active"
                    ? "ml-6 w-3/4 flex flex-col justify-between"
                    : "w-full mt-4"
                }`}
              >
                <Link to={`/shop/${item.id}`}>
                  <div className="flex flex-col">
                    <h3 className="text-[#262626] font-bold text-[16px] font-sans truncate">
                      {item.title}
                    </h3>
                    <h5 className="text-[#262626] font-normal text-[14px] font-sans truncate">
                      {item.brand}
                    </h5>
                  </div>
                </Link>
                <p className="text-[#262626] font-bold text-[16px] font-sans mt-2">
                  $ {item.price}
                </p>

                {activeGrid === "active" && (
                  <ul className="flex gap-4 mt-4">
                    <li className="flex items-center text-gray-700 hover:text-red-500 transition duration-200 cursor-pointer">
                      <FaHeart className="mr-1" /> Wish List
                    </li>
                    <li className="flex items-center text-gray-700 hover:text-blue-500 transition duration-200 cursor-pointer">
                      <IoGitCompare className="mr-1" /> Compare
                    </li>
                    <li className="flex items-center text-gray-700 hover:text-green-500 transition duration-200 cursor-pointer">
                      <FaCartPlus className="mr-1" /> Add to Cart
                    </li>
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Post;
