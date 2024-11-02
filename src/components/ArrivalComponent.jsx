import React, { useState, useEffect } from "react";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Container from './Container'; 

const ArrivalComponent = ({ item }) => {
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
                                <img 
                                    src={item.thumbnail} 
                                    alt="Product" 
                                    onLoad={handleImageLoad} 
                                />
                            )}
                            <ul className='text-end bg-[#fff] absolute left-0 w-full h-[25px] lg:h-[130px] duration-300 
                                  ease-in-out bottom-[-120px] group-hover:bottom-[0px]'>
                                <li className='cursor-pointer lg:py-1 text-[4px] lg:text-[16px] text-[#767676] font-dm duration-300 ease-in-out hover:text-[#000] font-bold'>
                                    Add to Wish List
                                    <FaHeart className='inline-block lg:m-2 text-[#000] text-[4px] m-[2px] lg:text-[16px]' />
                                </li>
                                <li className='cursor-pointer lg:py-1 text-[4px] lg:text-[16px] text-[#767676] font-dm duration-300 ease-in-out hover:text-[#000] font-bold'>
                                    Compare
                                    <PiArrowsCounterClockwiseBold className='inline-block lg:m-2 text-[#000] m-[2px] text-[4px] lg:text-[16px]' />
                                </li>
                                <li className='cursor-pointer lg:py-1 text-[4px] lg:text-[16px] text-[#767676] font-dm duration-300 ease-in-out hover:text-[#000] font-bold'>
                                    Add to Cart
                                    <FaShoppingCart className='inline-block lg:m-2 text-[#000] text-[4px] m-[2px] lg:text-[16px]' />
                                </li>
                            </ul>
                        </div>
                        <div className="lg:flex lg:justify-between">
                            <div>
                                <h2 className='font-dm lg:text-[20px] text-[4px] font-bold'>
                                    {loading ? <Skeleton width={100} /> : item.title}
                                </h2>
                                <h3 className='font-dm lg:text-[16px] text-[4px] text-[#767676]'>
                                    {loading ? <Skeleton width={80} /> : item.brand}
                                </h3>
                            </div>
                            <p className='text-[#767676] font-dm lg:text-[16px] text-[4px]'>
                                {loading ? <Skeleton width={50} /> : `$${item.price}`}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ArrivalComponent;