import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { HiMinusSm } from "react-icons/hi";

const ProductDetails = () => {
  let productId = useParams();
  let [singleProduct, setSingleProduct] = useState([]);
  let [show, setShow] = useState(false);
  let [ship, setShip] = useState(true);

  let getSingleProduct = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  };
  useEffect(() => {
    getSingleProduct();
  }, [singleProduct]);

  let clientRating = Array.from({length: 5}, (_,index)=>{
    let number = index + 0.5;
    return singleProduct.rating > index +1 ?  <FaStar className="text-[#FFD881]"/> : singleProduct.rating > number ?            <FaRegStarHalfStroke className="text-[#FFD881]"/>
    :<FaRegStar className="text-[#FFD881]"/>;

    
  })
  let discount = singleProduct.price * singleProduct.discountPercentage / 100

  let newPrice = singleProduct.price - discount
  

  return (
    <div>
      <Container>
        <div className="flex items-center py-4">
          <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
            <Link to="/">Home</Link>
          </h2>
          <IoIosArrowForward />

          <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
            <Link to="/shop">Products</Link>
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="w-[48%]">
            <img src={singleProduct.thumbnail} alt="" className="w-full" />
          </div>
     
        </div>
        <h3 className="text-[#262626] font-bold text-[20px] font-sans pt-8">
          Product
        </h3>
        <div className="">
          <div className="flex gap-x-2 items-center">
          {clientRating}|<span>Review</span>
          </div>
        </div>
        <div className="">
          <h2>Price</h2>
         <del className="font-bold">${singleProduct.price}</del>
         <p className="font-bold">${newPrice.toFixed(2)}</p>
        </div>
        <h2 className="font-sans font-bold text-[16px] text-[#262626] ">Status : {singleProduct.stock} </h2>
        <div className="flex space-x-4 mt-4">
          <button className="px-6 py-2 border border-black text-black bg-white transition hover:bg-black hover:text-white">
            Add to Wish List
          </button>
          <button className="px-6 py-2 border border-black text-black bg-white transition hover:bg-black hover:text-white">
            Add to Cart
          </button>
        </div>
        <div className="w-[50%]">
          <div
            className=" flex items-center justify-between cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <h3 className="font-sans font-bold text-[16px] text-[#262626] ">FEATURES & DETAILS</h3>
            {show ? <HiMinusSm /> : <LuPlus />}
          </div>
          {show && (
            <p>
              {singleProduct.description}
            </p>
          )}
        </div>
        <div className="w-[50%]">
          <div
            className=" flex items-center justify-between cursor-pointer"
            onClick={() => setShip(!ship)}
          >
            <h3 className="font-sans font-bold text-[16px] text-[#262626] ">SHIPPING & RETURNS</h3>
            {ship ? <HiMinusSm /> : <LuPlus />}
          </div>
          {ship && (
           <div className="">
             <p>
             Shipping Time : { singleProduct.shippingInformation}
            </p>
            <p>
              Return Policy : { singleProduct.returnPolicy}
            </p>
           </div>
          )}
        </div>

         <div className="">
         <div className="w-1/5 flex justify-between items-center">
          <h4>Description</h4>
          <h4>Reviews (1)</h4>
          </div>
          <h5>1 review for Product</h5>
          <div className="w-1/5 flex justify-between items-center">
            <h4>John Ford</h4>
           <div className="flex">
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
            </div>          
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
         </div>
         <div className="">
         <h3>Add a Review</h3>
         {/* <form className="max-w-lg mx-auto space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          placeholder="Your name here"
          className="w-full py-2 text-sm border-0 border-b border-gray-300 focus:outline-none focus:border-gray-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="Your email here"
          className="w-full py-2 text-sm border-0 border-b border-gray-300 focus:outline-none focus:border-gray-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Review</label>
        <textarea
          placeholder="Your review here"
          className="w-full py-2 text-sm border-0 border-b border-gray-300 focus:outline-none focus:border-gray-500"
          rows="4"
        ></textarea>
      </div>
    </form> */}
         </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
