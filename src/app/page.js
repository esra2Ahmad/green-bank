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
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Image from "next/image";
import Star from "./components/Star";

const page = () => {
  return (
    <div className=" h-[5170px] w-[1530px] bg-blackbg  overflow-hidden ">
      <div className=" w-[1440px] h-[5080px] relative  bg-[url('/images/dora(1).svg')]  ">
        
        <Navbar/>
        <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-6 h-6 ml-[1080px] relative top-[60px]"/>
        <div className="w-[992px] h-[992px] rounded-full  blur-[5000px] bg-green  opacity-15  relative top-[-726px] left-[436px] ">
        </div>
        
        <Panner/>
        <About/>
        <LogoSlider/>
        <Feature/>
        <CreditCard/>
        <Find/>
        <Testimonial/>
        <FAQ/>
        <div className="w-[892px] h-[892px] rounded-full  blur-[5000px] bg-green  opacity-25  relative top-[-526px] left-[-140px] rotate-90 "></div>
       <CTA/>
       <Footer/>
       <div className="w-[892px] h-[1092px] rounded-full  blur-[5000px] bg-green  opacity-15  relative top-[-1026px] left-[940px] rotate-90 "></div>
      </div>
      
    </div>
  );
};

export default page;
