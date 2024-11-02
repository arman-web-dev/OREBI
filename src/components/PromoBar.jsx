import React from "react";
import Container from "./Container";
import { PiNumberTwoBold } from "react-icons/pi";
import { MdLocalShipping } from "react-icons/md";
import { TbReload } from "react-icons/tb";

const PromoBar = () => {
  return (
    <section className="lg:py-[30px] py-[15px] border-b border-b-[#f0f0f0]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="33.99% flex items-center lg:gap-x-2 gap-x-1">
            <PiNumberTwoBold />
            <h4 className="font-sans font-normal text-[10px] lg:text-[16px] text-center">Two years warranty</h4>
          </div>
          <div className="33.99% flex items-center gap-x-2">
            <MdLocalShipping />
            <h4 className="font-sans font-normal text-[10px] lg:text-[16px] text-center">Free shipping</h4>
          </div>
          <div className="33.99% flex items-center gap-x-2">
            <TbReload />
            <h4 className="font-sans font-normal text-[10px] lg:text-[16px] text-center">Return policy in 30 days</h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PromoBar;