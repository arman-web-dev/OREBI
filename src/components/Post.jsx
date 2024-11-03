import React, { useContext } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { ApiData } from "./ContextApi";
import { Link } from "react-router-dom";

const Post = ({ allPage }) => {
  let Data = useContext(ApiData);
  return (
    <>
      {allPage.map((item) => (
        <div className="w-[32.5%]">
          <div className="w-[97%] relative">
            <div className="relative top-0 left-0 group overflow-hidden">
              <Link to={`/shop/${item.id}`}>
                <img src={item.thumbnail} alt="Product" className="w-full" />
              </Link>
              <ul className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-[0px] py-2 text-end pr-4">
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
              <div>
                <h3 className="text-[#262626] font-bold text-[16px] font-sans">
                  {item.title}
                </h3>
                <h5 className="text-[#262626] font-normal text-[16px] font-sans">
                  {item.brand}
                </h5>
              </div>
              <p className="text-[#262626] font-bold text-[16px] font-sans">
                $ {item.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
