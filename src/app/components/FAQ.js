import React from "react";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className=" relative top-[150px]">
      <h1 className="font-bold  font-M PLUS 1 text-[40px] text-white text-center">
        FAQs
      </h1>
      <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-8 h-8 relative top-[60px] left-[198px]"/>
      <div className="flex justify-between w-[1020px] mt-10 ml-[225px] items-center">
        <p className="font-bold font-poppins text-white  text-[24px] ">
          What credit score do I need to apply for a credit card?
        </p>
        <p className=" text-white  text-[44px]">-</p>
      </div>
      <p className="w-[1320px] text-gray text-poppins text-[16px] ml-[225px] mt-[1px] tracking-wide">
        The required credit score may vary depending on the specific credit
        card. Generally, a good to excellent credit score (typically <br />
        670 or above) increases your chances of approval for premium credit
        cards.
      </p>
      <div className=" h-[1px] w-[1020px] ml-[225px] bg-gray mt-4"></div>
      <div className="flex justify-between w-[1020px]  ml-[225px] items-center mt-4">
        <p className="text-[24px] text-white font-bold font-poppins"> How can I apply for a credit card online?</p>
        <p className=" text-white text-[24px]">+</p>
      </div>
      <div className=" h-[1px] w-[1020px] ml-[225px] bg-gray mt-4"></div>
      <div className="flex justify-between w-[1020px]  ml-[225px] items-center mt-4">
        <p className="text-[24px] text-white font-bold font-poppins"> Are there any annual fees associated with the credit card?</p>
        <p className=" text-white text-[24px]">+</p>
      </div>
      <div className=" h-[1px] w-[1020px] ml-[225px] bg-gray mt-4"></div>
      <div className="flex justify-between w-[1020px]  ml-[225px] items-center mt-4">
        <p className="text-[24px] text-white font-bold font-poppins"> How long does it take to receive the credit card once approved?</p>
        <p className=" text-white text-[24px]">+</p>
      </div>
      <div className=" h-[1px] w-[1020px] ml-[225px] bg-gray mt-4"></div>
      
      <div className="flex justify-between w-[1020px]  ml-[225px] items-center mt-4">
        <p className="text-[24px] text-white font-bold font-poppins">  How can I check my credit card balance and transactions?</p>
        <p className=" text-white text-[24px]">+</p>
    
      </div>
      <div className=" h-[1px] w-[1020px] ml-[225px] bg-gray mt-4"></div>
      <div className="flex justify-between w-[1020px]  ml-[225px] items-center mt-4">
        <p className="text-[24px] text-white font-bold font-poppins"> What should I do if my credit card is lost or stolen?</p>
        <p className=" text-white text-[24px]">+</p>
      </div>
      <div className=" h-[1px] w-[1020px] ml-[225px] bg-gray mt-4"></div>
      <div className="flex justify-between w-[1020px]  ml-[225px] items-center mt-4">
        <p className="text-[24px] text-white font-bold font-poppins"> Is my credit card information secure?</p>
        <p className=" text-white text-[24px]">+</p>
      </div>
      <div className=" h-[1px] w-[1020px] ml-[225px] bg-gray mt-4"></div>
      <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-8 h-8 relative top-[-224px] left-[227px]"/>
      <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-8 h-8 relative top-[-84px] left-[827px]"/>
      <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-2 h-2 relative top-[-264px] left-[1280px]"/>
      <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-2 h-2 relative top-[-764px] left-[1080px]"/>
      
    </div>
  );
};

export default FAQ;
