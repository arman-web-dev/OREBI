import React, { useContext, useEffect, useState } from "react";
import Container from "../components/Container";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Post from "../components/Post";
import { useAuth } from "../components/ContextApi";
import Pagination from "../components/Pagination";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const Shop = () => {
  let { info } = useAuth();
  let [shop, setShop] = useState(true);
  let [category, setCategory] = useState([]);
  let [brandShow, setBrandShow] = useState([]);
  let [low, setLow] = useState("");
  let [high, setHigh] = useState("");
  let [priceShow, setPriceShow] = useState([]);
  let [categoryFilter, setCategoryFilter] = useState([]);
  let [brand, setBrand] = useState(false);
  let [price, setPrice] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(6);
  let [activeGrid, setActiveGrid] = useState("");

  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;

  let allPage = info.slice(firstPage, lastPage);

  let pageNumber = [];
  for (
    let i = 0;
    i <
    Math.ceil(
      categoryFilter.length > 0 ? categoryFilter : info.length / perPage
    );
    i++
  ) {
    pageNumber.push(i);
  }
  let paginate = (paginate) => {
    setCurrentPage(paginate + 1);
  };

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1);
    }
  };
  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };
  let handleMulti = () => {
    setActiveGrid("active");
  };
  let handleChange = (e) => {
    setPerPage(e.target.value);
  };
  useEffect(() => {
    setCategory([...new Set(info.map((item) => item.category))]);
    setBrandShow([...new Set(info.map((item) => item.brand))]);
  }, [info]);

  let handleCategory = (citem) => {
    let filterItem = info.filter((item) => item.category == citem);
    setCategoryFilter(filterItem);
  };
  let handleAll = () => {
    setCategoryFilter("");
  };
  let handleprice = (value) => {
    setLow(value.low);
    setHigh(value.high);
    let priceRange = info.filter(
      (item) => item.price > value.low && item.price < value.high
    );
    setPriceShow(priceRange);
    if (priceRange.length > 0) {
      setCategoryFilter(priceRange);
    } else {
      setCategoryFilter("");
    }
  };
  let handleBrand = (bitem) => {
    let filterItem = info.filter((item) => item.brand == bitem);
    setCategoryFilter(filterItem);
    console.log(filterItem);
  };

  return (
    <section>
      <Container>
        <div className="">
          <h2 className="font-sans text-[49px] font-bold text-[#262626] ">
            Products
          </h2>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome}>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Products</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="flex justify-between lg:py-[50px]">
          <div className="w-1/5 pt-[50px]">
            <div
              className="flex justify-between items-center pb-[15px] cursor-pointer"
              onClick={() => setShop(!shop)}
            >
              <h3 className="font-sans font-bold text-[20px] text-[#262626]">
                Shop by Category
              </h3>
              {shop ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </div>
            {shop && (
              <ul className="cursor-pointer">
                <li
                  onClick={handleAll}
                  className="font-sans font-normal text-[16px] text-[#767676] lg:py-5 border-b border-b-[#f0f0f0] "
                >
                  All Product
                </li>
                {category.map((item) => (
                  <li
                    onClick={() => handleCategory(item)}
                    className="font-sans font-normal text-[16px] text-[#767676] lg:py-5 border-b border-b-[#f0f0f0] "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setBrand(!brand)}
            >
              <h3 className="font-sans font-bold text-[20px] text-[#262626] lg:py-[15px]">
                Shop by Brand
              </h3>
              {brand ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </div>
            {brand && (
              <ul className="cursor-pointer">
                {brandShow.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleBrand(item)}
                    className="font-sans font-normal text-[16px] text-[#767676] lg:py-5 border-b border-b-[#f0f0f0]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setPrice(!price)}
            >
              <h3 className="font-sans font-bold text-[20px] text-[#262626] lg:py-[15px]">
                Shop by Price
              </h3>
              {price ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            </div>
            {price && (
              <ul className="cursor-pointer">
                <li
                  onClick={() => handleprice({ low: 0, high: 10 })}
                  className="font-sans font-normal text-[16px] text-[#767676] lg:py-5 border-b border-b-[#f0f0f0] "
                >
                  $0.00 - $9.99
                </li>
                <li
                  onClick={() => handleprice({ low: 10, high: 20 })}
                  className="font-sans font-normal text-[16px] text-[#767676] lg:py-5 border-b border-b-[#f0f0f0] "
                >
                  $10.00 - $19.99
                </li>
                <li
                  onClick={() => handleprice({ low: 20, high: 999 })}
                  className="font-sans font-normal text-[16px] text-[#767676] lg:py-5 border-b border-b-[#f0f0f0] "
                >
                  $20.00 - $99.99
                </li>
              </ul>
            )}
          </div>
          <div className="w-[78%]">
            <div className="flex items-center justify-between">
              <div className="">
                <div className=" flex items-center gap-x-4">
                  <div
                    onClick={() => setActiveGrid("")}
                    className="p-3 hover:bg-[gray] text-[#262626]"
                  >
                    <IoGrid />
                  </div>
                  <div
                    onClick={handleMulti}
                    className="p-3 hover:bg-[gray] text-[#262626]"
                  >
                    <FaList />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-2">
                  <label htmlFor="sort" className="text-[#262626] font-medium">
                    Sort by:
                  </label>
                  <select
                    name="sort"
                    id="sort"
                    className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Price Low to High</option>
                    <option value="">Price High to Low</option>
                    <option value="">Newest First</option>
                    <option value="">Oldest First</option>
                  </select>
                </div>
                <div className="flex items-center gap-x-2">
                  <label htmlFor="show" className="text-[#262626] font-medium">
                    Show:
                  </label>
                  <select
                    onChange={handleChange}
                    name="show"
                    id="show"
                    className="px-2 py-1 cursor-pointer border border-gray-300 rounded-md focus:outline-none  focus:ring-0"
                  >
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-wrap">
              <Post
                allPage={allPage}
                activeGrid={activeGrid}
                categoryFilter={categoryFilter}
                priceShow={priceShow}
              />
              <div className="py-10 flex justify-center w-full">
                <Pagination
                  pageNumber={pageNumber}
                  paginate={paginate}
                  next={next}
                  prev={prev}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
