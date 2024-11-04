import React, { useState, useEffect } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Container from "./Container";
import { Link } from "react-router-dom";

const BestsellersComponent = ({ item }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <section>
        <Container className="flex lg:mt-6 mt-[10px]">
          <div className="!w-[97%] relative">
            <div className="relative top-0 left-0 group overflow-hidden">
              {loading ? (
                <Skeleton height={300} width={"100%"} />
              ) : (
                <Link to="/shop">
                  <img
                    src={item.thumbnail}
                    alt="Product"
                    onLoad={handleImageLoad}
                  />
                </Link>
              )}
              <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4 cursor-pointer">
                <li className="py-2">
                  Add to Wish List <FaHeart className="inline-block" />
                </li>
                <li className="py-2">
                  Compare <IoGitCompare className="inline-block" />
                </li>
                <li className="py-2">
                  Add to Cart <FaCartPlus className="inline-block" />
                </li>
              </ul>
            </div>

            <div className="flex justify-between">
              <div className="">
                <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                  {loading ? <Skeleton width={100} /> : item.title}
                </h3>
                <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                  {loading ? <Skeleton width={80} /> : item.brand}
                </h5>
              </div>
              <p className="text-[#262626] font-bold text-[16px] font-sans">
                {loading ? <Skeleton width={50} /> : `$${item.price}`}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BestsellersComponent;
