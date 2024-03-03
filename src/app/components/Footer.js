import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" w-[1530px] h-[371px]  bg-gray2/5  rounded-[18px] relative top-[-760px]  backdrop-blur   ">
      <div className="flex  gap-[150px]">
      <div>
      <div className="flex gap-[8px] ml-[105px] pt-[68px]">
      <Image
        src="/images/Exclude.png"
        alt="logo"
        height={24}
        width={24}
        ></Image>
        
      <p className="text-white font-M PLUS 1 font-bold  text-[20px]">GreenBank</p>
      </div>
      <p className=" font-M PLUS 1 text-gray text-[16px] tracking-normal ml-[105px] mt-4">Discover the power of our secure and <br/>rewarding credit cards</p>
    </div>
    <div className="w-[816px] flex justify-between pt-[68px]">
        <div className=" flex flex-col gap-4">
            <h1 className="font-bold font-M PLUS 1 text-[16px] text-white">About us</h1>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">Investors</p>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">Featurees</p>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">Book a demo</p>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">secuirty</p>
        </div>
        <div className=" flex flex-col gap-4">
            <h1 className="font-bold font-M PLUS 1 text-[16px] text-white">Products</h1>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">Credits Cards</p>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">Gift Cards</p>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">Savings accounts</p>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">NFT</p>
        </div>
        <div className=" flex flex-col gap-4">
            <h1 className="font-bold font-M PLUS 1 text-[16px] text-white">Useful Links</h1>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">Free rewards</p>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">Documentation</p>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">Affiliate program</p>
          
        </div>
        <div className=" flex flex-col gap-4">
            <h1 className="font-bold font-M PLUS 1 text-[16px] text-white">Social</h1>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">Changelog</p>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">License</p>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">Site Maps</p>
            <p className="font-normal font-M PLUS 1 text-[16px] text-gray">News</p>
        </div>

    </div>
    </div>
    <div className=" flex justify-between  pt-20
    \ mx-[115px]">
        <p className="font-normal font-poppins text-[12px] text-gray">copyright 2023 DoraDesign All Rights Reserved</p>
        <p className="font-normal font-poppins text-[12px] text-gray">This page uses cookies. See cookies details here </p>
    </div>
   
    </div>
  );
};

export default Footer;
