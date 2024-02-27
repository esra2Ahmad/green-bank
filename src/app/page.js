import React from "react";
import Navbar from "./components/Navbar";
import Panner from "./components/Panner";
import "./globals.css";
import About from "./components/About";
import LogoSlider from "./components/LogoSlider";
import Feature from "./components/Feature";
import CreditCard from "./components/CreditCard";
import Find from "./components/Find";
import Testimonial from "./components/Testimonial";


const page = () => {
  return (
    <div className=" h-[5117px] w-[1530px] bg-blackbg  overflow-hidden ">
      <div className=" w-[1440px] h-[5080px] relative  bg-[url('/images/dora(1).svg')]  ">
        <Navbar/>
        <div className="w-[992px] h-[992px] rounded-full  blur-[5000px] bg-green  opacity-15  relative top-[-726px] left-[436px] ">
        </div>
        <Panner/>
        <About/>
        <LogoSlider/>
        <Feature/>
        <CreditCard/>
        <Find/>
        <Testimonial/>
      </div>
      
    </div>
  );
};

export default page;
