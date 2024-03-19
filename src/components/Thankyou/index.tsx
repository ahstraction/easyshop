// @ts-nocheck
"use client"
import React from 'react'
import downloadbtn from "@/public/download button.png"
import Image from 'next/image'
import Navbar from '../navbar/Navbar'
import useShoppingCart from "@/hooks/useShoppingCart";

const Thankyou = () => {
  const {
    cartProducts,
    // getItemQuantity,
    // increaseCartQuantity,
    // decreaseCartQuantity,
    // removeFromCart,
    // cartProductsTotalPrice,
  } = useShoppingCart();
   
  // console.log(cartProducts,"cartProducts")

  const firstObjectSongLink = cartProducts.length > 0 ? `${cartProducts[0]?.songlink}` : null;


  console.log(firstObjectSongLink, "First object song link");

  const handleDownload = () => {
   // URL to the video file
   const videoUrl = firstObjectSongLink;

   // Create a temporary link element
   const link = document.createElement('a');
   link.href = videoUrl;
   link.download = 'video.mp3'; 
   link.click();
 };
  return (
   <>
      <Navbar/>
   
   <div className='min-h-[80vh] mob:min-h-screen h-full flex items-center justify-center mob:px-5'>
<div className=" w-full  max-w-[1140px] z-10">
  <div className="flex mob:block w-full justify-between ">
  <div className="">
    <h2 className='text-[20px] mob:text-center font-jakrata font-normal text-[#FFFFFF] tracking-[3px] leading-[25.2px] mb-5'>Phillie-BOP Productions</h2>

     <h1 className='text-[70px] mob:text-center mob:mb-10 mob:text-[40px] mob:leading-[40px] font-outfit font-medium text-gradient tracking-[3px] leading-[80px] max-w-[655px] '>
        Thank You For Your Purchase!
       </h1>
    </div>

    {/*download button */}
<div className="flex mob:justify-center">
  {/* onClick={handleDownload} */}

  {firstObjectSongLink && ( // Check if videoUrl is not empty
      <button >
      <Image onClick={handleDownload} className='max-w-[204px] max-h-[194px] ' src={downloadbtn} alt="" width={204} height={194} />
          
          </button> 
      )}

</div>
     </div>

  <div className=" pt-[100px]  max-w-[1140px]  w-full">
          <hr className="h-px  bg-[#FFFFFF33]/20 border-0 dark:bg-[#FFFFFF33]"></hr>
        </div>
</div>

    </div>
   </>
  )
}

export default Thankyou
