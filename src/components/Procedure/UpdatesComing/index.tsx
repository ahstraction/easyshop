import React from 'react'
import Image from 'next/image'

import img1 from '@/public/imgs/procedure/updates/image 4.png'
import img2 from '@/public/imgs/procedure/updates/image 4 (1).png'
import img3 from '@/public/imgs/procedure/updates/image 4 (2).png'

import arrow from '@/public/imgs/icons/bi_arrow-up.svg'
const UpdatesComing = () => {
  return (
    <>
      <div className="py-20 flex justify-center bg-[#1B1918] relative">
        <div className="w-full max-w-[1140px] ">
            
        <div className="flex mob:block w-full justify-between items-center max-w-[1140px] my-8">
{/* left text */}
                    <div className="">
                <h1 className="text-[50px] font-outfit  font-medium leading-[63px] text-gradient mb-5">Updates Coming Soon!</h1>
                    <h2 className="text-[20px] font-jakrata uppercase font-normal leading-[25.2px] text-[#FFFFFF]">What’s Up on Phillie-BOP</h2>
                    </div>
                    {/* right text */}
                    <div className="">
                    <div className="mt-9 flex justify-center">
            <button className=" py-[20px] px-[40px] rounded-[150px] bg-[#FFFFFF] text-[#121212] text-[15px] leading-[18.9px] uppercase font-semibold font-jakrataS">
            View All Events
            </button>
          </div>
                    </div>
                </div>

                {/* tickets */}
        <div className=" w-full  max-w-[1140px] my-20 relative">

{/* comming soon text */}
<h2 className='text-[20px] text-center w-full text-gradient leading-[25.2px] font-normal font-jakrata absolute bottom-3 z-30'>Coming Soon</h2>

            {/* first */}
<div className="flex justify-between items-center">
<div className="flex items-center gap-[30px] w-[670px]">
    {/* img */}
    <Image src={img1} alt="" height={94} width={94} />
    {/* text */}
    <p className='text-[22px] text-[#FFFFFF] leading-[27.72px] font-medium font-outfit'>Radio <br /> Interview</p>
</div>
{/* center time */}
<div className="flex items-center gap-[15px]">
    {/* date */}
    <h1 className='text-[60px] text-[#FFFFFF] leading-[75.6px] font-bold font-outfit'>14</h1>

    {/* text */}
<div className="">
    {/* month */}
<p className='text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata'>March</p>
{/* time */}
<p className='text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata'>05:00 PM</p>


</div>
</div>
{/* buy ticket */}
<div className="flex items-center gap-[10px]">
    <button className='text-[15px] text-[#FFFFFF] leading-[18.9px] font-semibold font-jakrata tracking-[1px]'>Buy Tickets</button>
    <Image src={arrow} alt="" width={15} height={23} />
</div>
</div>

<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

{/* second */}
<div className="flex justify-between items-center">
<div className="flex items-center gap-[30px] w-[670px]">
    {/* img */}
    <Image src={img2} alt="" height={94} width={94} />
    {/* text */}
    <p className='text-[22px] text-[#FFFFFF] leading-[27.72px] font-medium font-outfit'>U.K. Ent. Presents: Valentine’s Day <br /> Showcase via Facebook</p>
</div>
{/* center time */}
<div className="flex items-center gap-[15px]">
    {/* date */}
    <h1 className='text-[60px] text-[#FFFFFF] leading-[75.6px] font-bold font-outfit'>14</h1>

    {/* text */}
<div className="">
    {/* month */}
<p className='text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata'>March</p>
{/* time */}
<p className='text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata'>05:00 PM</p>


</div>
</div>
{/* buy ticket */}
<div className="flex items-center gap-[10px]">
    <button className='text-[15px] text-[#FFFFFF] leading-[18.9px] font-semibold font-jakrata tracking-[1px]'>Buy Tickets</button>
    <Image src={arrow} alt="" width={15} height={23} />
</div>
</div>

<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

{/* third */}
<div className="flex justify-between items-center">
<div className="flex items-center gap-[30px] w-[670px]">
    {/* img */}
    <Image src={img3} alt="" height={94} width={94} />
    {/* text */}
    <p className='text-[22px] text-[#FFFFFF] leading-[27.72px] font-medium font-outfit'>Soul Sessions: Artist Interview with <br /> Tracy Cruz via KUMU Live stream show (The Philippines)</p>
</div>
{/* center time */}
<div className="flex items-center gap-[15px]">
    {/* date */}
    <h1 className='text-[60px] text-[#FFFFFF] leading-[75.6px] font-bold font-outfit'>14</h1>

    {/* text */}
<div className="">
    {/* month */}
<p className='text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata'>March</p>
{/* time */}
<p className='text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata'>05:00 PM</p>


</div>
</div>
{/* buy ticket */}
<div className="flex items-center gap-[10px]">
    <button className='text-[15px] text-[#FFFFFF] leading-[18.9px] font-semibold font-jakrata tracking-[1px]'>Buy Tickets</button>
    <Image src={arrow} alt="" width={15} height={23} />
</div>
</div>

<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        </div>
        <div className="absolute z-20  top-[210px] inset-0 bg-gradient-to-b from-[#1B1918]/40 to-[#1B1918] h-[60%]"></div>

      </div>
    </>
  )
}

export default UpdatesComing
