import React from 'react'
import Image from 'next/image'

const Star = () => {
  return (
    <div className=' relative top-[100px] '>
        <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-6 h-6 "/>
                <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-6 h-6"/>
    </div>
  )
}

export default Star