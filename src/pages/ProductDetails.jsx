import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { HiMinusSm } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/slice/productSlice";

const ProductDetails = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { id: productId } = useParams();
  let [singleProduct, setSingleProduct] = useState({});
  let [show, setShow] = useState(false);
  let [ship, setShip] = useState(true);

  const getSingleProduct = () => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  };

  useEffect(() => {
    getSingleProduct();
  }, [productId]);

  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return singleProduct.rating > index + 1 ? (
      <FaStar className="text-[#FFD881]" />
    ) : singleProduct.rating > number ? (
      <FaRegStarHalfStroke className="text-[#FFD881]" />
    ) : (
      <FaRegStar className="text-[#FFD881]" />
    );
  });

  let discount = (singleProduct.price * singleProduct.discountPercentage) / 100;
  let newPrice = singleProduct.price - discount;

  let handleCart = (item) => {
    dispatch(addToCart({...item, qun: 1}))
    toast("Item added to cart!");
    setTimeout(() => {
      navigate("/cart");
    }, 2000);
  };

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
        <div className="w-1/2">
          <h3 className="text-[#262626] font-bold text-[20px] font-sans pt-8">
            {singleProduct.title}
          </h3>
          <div className="">
            <div className="flex gap-x-2 items-center">
              {clientRating} |{" "}
              <span>
                {singleProduct.reviews ? singleProduct.reviews.length : 0}{" "}
                Reviews
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-2 py-5 border-b border-b-[#F0f0f0]">
            <h2 className="font-sans font-bold text-[16px] text-[#262626] ">
              Price :
            </h2>
            <del className="font-normal font-sans text-[16px] text-[#767676]">
              ${singleProduct.price}
            </del>
            <p className="font-bold font-sans text-[20px] text-[#262626]">
              ${newPrice.toFixed(2)}
            </p>
          </div>
          <h2 className="font-sans font-bold text-[16px] text-[#262626] py-5 border-b border-b-[#F0f0f0]">
            Status : {singleProduct.stock}
          </h2>
          <div className="flex space-x-4 py-[30px] border-b border-b-[#F0f0f0] ">
            <button className="h-[50px] w-[200px] font-sans font-bold text-[14px] border-2 border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300">
              Add to Wish List
            </button>
            <button
              onClick={() => handleCart(singleProduct)}
              className="h-[50px] w-[200px] font-sans font-bold text-[14px] border-2 border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300"
            >
              Add to Cart
            </button>
          </div>
          <div className="py-[25px] border-b border-b-[#F0f0f0]">
            <div
              className=" flex items-center justify-between cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <h3 className="font-sans font-bold text-[16px] text-[#262626] ">
                FEATURES & DETAILS
              </h3>
              {show ? <HiMinusSm /> : <LuPlus />}
            </div>
            {show && (
              <p className="font-sans font-normal text-[16px] text-[#767676] py-2">
                {singleProduct.description}
              </p>
            )}
          </div>
          <div className="py-[25px] border-b border-b-[#F0f0f0]">
            <div
              className=" flex items-center justify-between cursor-pointer"
              onClick={() => setShip(!ship)}
            >
              <h3 className="font-sans font-bold text-[16px] text-[#262626] ">
                SHIPPING & RETURNS
              </h3>
              {ship ? <HiMinusSm /> : <LuPlus />}
            </div>
            {ship && (
              <div className="">
                <p className="font-sans font-normal text-[16px] text-[#767676] py-1">
                  Shipping Time : {singleProduct.shippingInformation}
                </p>
                <p className="font-sans font-normal text-[16px] text-[#767676] py-1">
                  Return Policy : {singleProduct.returnPolicy}
                </p>
              </div>
            )}
          </div>
          <div className="py-[20px]">
            <p className="font-sans font-normal text-[16px] text-[#767676] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="pt-[100px]">
          <div className="w-1/5 flex justify-between items-center">
            <h4 className="font-bold text-lg">Description</h4>
            <h4 className="font-bold text-lg">
              Reviews (
              {singleProduct.reviews ? singleProduct.reviews.length : 0})
            </h4>
          </div>
          <div className="space-y-4 mt-4">
            {singleProduct.reviews &&
              singleProduct.reviews.map((review, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-md hover:bg-gray-100 transition duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-lg">
                      {review.reviewerName}
                    </h4>
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, idx) =>
                        idx < review.rating ? (
                          <FaStar className="text-[#FFD881] mr-1" key={idx} />
                        ) : (
                          <FaRegStar
                            className="mr-1 text-[#FFD881]"
                            key={idx}
                          />
                        )
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">{review.comment}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="heading py-[48px]">Add a Review</h3>
          <form>
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="font-sans font-bold text-[16px] text-[#262626]"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Your name here"
                className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                font-sans font-normal text-[14px] text-[#767676] "
              />
            </div>
            <div className="flex flex-col py-[23px]">
              <label
                htmlFor=""
                className="font-sans font-bold text-[16px] text-[#262626]"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Your email here"
                className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                font-sans font-normal text-[14px] text-[#767676] "
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="font-sans font-bold text-[16px] text-[#262626]"
              >
                Review
              </label>
              <textarea
                className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                font-sans font-normal text-[14px] text-[#767676] resize-none"
                rows="4"
                placeholder="Write your comment here..."
              />
            </div>
            <div className="pt-[30px]">
              <button
                type="submit"
                className="h-[50px] w-[200px] font-sans font-bold text-[14px] border-[2px] border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300"
              >
                Post
              </button>
            </div>
          </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </Container>
    </div>
  );
};

export default ProductDetails;
