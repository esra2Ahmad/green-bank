import React from "react";
import Section from "./Section";
import { feature } from "../constants";

const Feature = () => {
  return (
    <div>
      <h1 className=" font-M PLUS 1 font-bold text-[40px]  text-white text-center top-[-570px] relative">
        {" "}
        What do we offer?{" "}
      </h1>
      <div className='flex flex-row justify-between  w-[1350px] h-[186px] ml-[115px] relative top-[-600px]  '>
        {feature.map((data, index) => (
          <Section
            key={index}
            image={data.image}
            title={data.title}
            text={data.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
