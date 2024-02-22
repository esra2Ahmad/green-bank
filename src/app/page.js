import React from "react";
import Navbar from "./components/Navbar";
import Panner from "./components/Panner";
import "./globals.css";
import About from "@/About";


const page = () => {
  return (
    <div className=" h-[5117px] bg-blackbg  overflow-hidden ">
      <div className=" w-max h-[5080px] relative  bg-[url('/images/dora(1).svg')]  ">
        <Navbar/>
        <div className="w-[992px] h-[992px] rounded-full  blur-[5000px] bg-green  opacity-15  relative top-[-726px] left-[436px] ">
        </div>
        <Panner/>
        <About/>
        
      </div>
      
    </div>
  );
};

export default page;
