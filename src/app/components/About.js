import React from 'react'
import { about } from '../constants'
import Card from './Card'
import Star from './Star'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      
    <div className='w-[1300px] h-[186px] ml-[100px]  bg-gray2/20   backdrop-blur-md rounded-[32px] relative top-[-730px]'>
        <div className='flex flex-row justify-between  '>
        {about.map((data, index) => (
          <Card
            key={index}
            id={data.id}
            title={data.title}
          />
        ))}
      </div>
    </div>
    </div>
  )
}


export default About