import React from 'react'
import Image from 'next/image'

import commas from "@/public/imgs/icons/comas.svg"


const OurClient = () => {
  return (
    <div className='px-5 pt-8 pb-8'>
      <h1 className='text-[30px] font-outfit font-medium text-gradient leading-[40px] text-center'>What our clients say</h1>
<div className="flex justify-center my-6">
    
<Image src={commas} alt="" width={30}  height={30}/>


</div>

<p className='text-[16px] font-outfit font-normal text-[#FFFFFF] leading-[25px] text-center mb-6'>
If you feel like you have the gift, and you want to find out; make yourself available and the world will let you know.
</p>

<p className='text-[14px] font-outfit font-normal text-[#FFFFFF] leading-[20px] text-center'>
Bill Withers
<br />

<span className="text-[#878581]">
(ASCAP Expo 2015)
</span>
</p>
    </div>
  )
}

export default OurClient
