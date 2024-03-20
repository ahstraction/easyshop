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

  const handleDownload = (songLink: string, productName: string) => {
    const link = document.createElement('a');
    link.href = songLink;
    link.download = `${productName}.mp3`;
    link.click();
  };


 
  return (
   <>
      <Navbar/>
   
   <div className='min-h-screen mob:min-h-screen h-full flex items-center justify-center mob:px-5'>
<div className=" w-full  max-w-[1140px] z-10">
  <div className=" my-20">
    <h2 className='text-[20px] mob:text-center font-jakrata font-normal text-[#FFFFFF] tracking-[3px] leading-[25.2px] mb-5'>Phillie-BOP Productions</h2>

     <h1 className='text-[70px] mob:text-center mob:mb-10 mob:text-[40px] mob:leading-[40px] font-outfit font-medium text-gradient tracking-[3px] leading-[80px] max-w-[655px] '>
        Thank You For Your Purchase!
       </h1>
    </div>

 

     <div className="mt-5">
     {cartProducts.map((product) => (
      <div className="">
          <div className='flex mob:block justify-between' key={product.id}>
         
         <div className="flex mob:block mob:my-4 gap-5 items-center  my-2">
      <div className="mob:flex mob:justify-center">
      {product.img && <Image src={product.img} alt={product.name} width={150} height={150} />}</div> 
         <h3 className='text-white font-jakrata mob:text-center text-[20px] mob:my-4 font-medium'>{product.title}</h3>
         </div>
      <div className="mob:flex mob:justify-center">
      {product.songlink ? (
           <button className='text-gradient' onClick={() => handleDownload(product.songlink, product.name)}>
            <Image  className='max-w-[204px] max-h-[194px] ' src={downloadbtn} alt="" width={100} height={10} />
           </button>
         ) : (
           <p className='text-gradient'></p>
         )}
      </div>
       </div>
         <div className=" py-[10px] mob:py-[20px]  max-w-[1140px]  w-full">
         <hr className="h-px  bg-[#FFFFFF33]/20 border-0 dark:bg-[#FFFFFF33]"></hr>
       </div>
      </div>
      ))}
     </div>


  
</div>

    </div>
   </>
  )
}

export default Thankyou
