import React from 'react'
import Image from 'next/image'

const CTA = () => {
  return (
    <div className='w-[1240px] h-[472px] flex justify-between items-center  relative top-[-764px] ml-[105px]'>
        <div className='w-[605px] h-[252px]'>
            <h1 className='font-bold font-poppins text-[48px] text-white tracking-wide'>Easy Way to manage<br/> your finances</h1>
            <p className=' font-M PLUS 1 text-gray  text-[18px] mt-[12px]'>Easy to use mobile app that support on android and ios.</p>
        <div className='flex  justify-between w-[349px] h-[64px] mt-10'>
            <div className='w-[154px] h-[64px] rounded-[16px] bg-gray2'>
                <Image alt="APPStore" width={122} height={32} src="/images/app.png " className='mt-[15px] ml-[11px]'/>
                
            </div>
            <div className='w-[154px] h-[64px] rounded-[16px] bg-gray2'>
            <Image alt="APPStore" width={122} height={62} src="/images/google.png" className='mt-[15px] h-[34px] ml-[11px]'/>   
            </div>
        </div>
        </div>
        <div>
            <Image alt="mobile" width={604}  height={850} src="/images/image 108.png" className=' ml-36'/>
        </div>
    </div>
  )
}

export default CTA