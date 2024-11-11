import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, minusToCart, removeFromCart } from "../components/slice/productSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cartItems);

 

  const handleAddQuantity = (item) => {
    dispatch(addToCart({ ...item, quantity: item.quantity + 1 }));
  };

  const handleMinusQuantity = (item) => {
    dispatch(minusToCart({ ...item, quantity: item.quantity - 1 }));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <section className="py-[55px]">
      <Container>
        <div className="">
          <h3 className="font-sans text-[49px] font-bold text-[#262626] ">
            Cart
          </h3>
          <div className="flex items-center py-4">
            <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
              <Link to="/">Home</Link>
            </h2>
            <IoIosArrowForward />
            <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
              <Link to="/shop">Shop</Link>
            </h2>
            <IoIosArrowForward />
            <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
              <Link to="/myaccount">Cart</Link>
            </h2>
          </div>
        </div>
        {cartItems.length ? (
          cartItems.map((item) => (
            <div className="py-[55px]">
              <div className="flex items-center bg-[#F5F5F3] py-[32px] pl-3 border">
                <div className="w-1/4">
                  <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                    Product
                  </h4>
                </div>
                <div className="w-1/4">
                  <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                    Price
                  </h4>
                </div>
                <div className="w-1/4">
                  <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                    Quantity
                  </h4>
                </div>
                <div className="w-1/4">
                  <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                    Total
                  </h4>
                </div>
              </div>
              <div className="flex items-center py-[32px] pl-3 border">
                <div className="w-1/4">
                  <div className="">
                    <div className="flex justify-between items-center">
                      <div className="w-[10%]">
                        <button
                          className=""
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <ImCross />
                        </button>
                      </div>
                      <div className="w-[25%]">
                        <img src={item.thumbnail} alt="" className="w-full" />
                      </div>
                      <div className="w-[50%]">
                        <h3 className="font-sans font-bold text-[16px] text-[#262626]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/4">
                  <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                    ${item.price.toFixed(2)}
                  </h4>
                </div>
                <div className="w-1/4">
                  <div className="inline-block border">
                    <button
                      onClick={() => handleMinusQuantity(item)}
                      className="px-5 py-1 border-none"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => handleAddQuantity(item)}
                      className="px-5 py-1 border-none"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-1/4">
                  <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                    ${(item.price * item.quantity).toFixed(2)}
                  </h4>
                </div>
              </div>
              <div className="flex items-center py-[20px] pl-3 border justify-between">
                <div className="flex items-center">
                  <div className="">
                    <select className="border p-2 w-[250px] h-[50px] outline-none shadow focus:!rounded-none focus:ring-0 focus:outline-none focus:ring-[#fff] text-[#767676] font-sans font-normal text-[16px] ">
                      <option>Size</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <h4 className="font-sans font-bold text-[#262626] text-[14px] px-4">
                    Apply coupon
                  </h4>
                </div>
                <div className="font-sans font-bold text-[#262626] text-[14px] px-4">
                  <h4>Update cart</h4>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center min-h-[100px]">
            <h2 className="font-sans font-bold text-[44px] text-[#262626]">
              Your cart is empty
            </h2>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Cart;
