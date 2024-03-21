// @ts-nocheck

"use client";
import React, { ChangeEvent, FormEvent, useState,Fragment } from "react";

import Image from "next/image";
import Link from "next/link";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import cap from "@/public/imgs/cart/cap.png";
import Navbar from "@/components/navbar/Navbar";

import medalimg from "@/public/imgs/icons/medaltick.svg";
import plus from "@/public/imgs/icons/ic_round-plus.svg";
import minus from "@/public/imgs/icons/tabler_minus.svg";
import credit from "@/public/imgs/icons/creditcart.svg";

import shopbtn from "@/public/imgs/checkout/shopbtn.png";
import paybtn from "@/public/imgs/checkout/pay.png";
import remove from "@/public/imgs/checkout/Remove.png";
import { orderDataKeys } from "@/constants/orderdetail";
import useShoppingCart from "@/hooks/useShoppingCart";


import StripeForm from "./Stripe";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

interface IndexSignature {
  [key: string | number]: any;
}


const Form = () => {
  const {
    cartProducts,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartProductsTotalPrice,
  } = useShoppingCart();


    // form values
    const [formData, setFormData] = useState<IndexSignature>(orderDataKeys);
    const [loading, setLoading] = useState<boolean>(false);

    // console.log("formData", formData);
  
    const handleInputChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  

  //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

  
  // console.log(formData,"formData")
 
  //     try {
  //       const res = await axios.post("/api/order", formData);
  //       const data = res?.data;
  
  
  //       if (data) {
  //         // alert("Proposal sent successfully!");
  //       } else {
  //         throw new Error(data.message || "Failed to send email");
  //       }
  //     } catch (error) {
  //       // console.error("Error sending email:", error);
  //       // alert("Failed to send email. Please try again later.");
  //     } finally {
  //       setLoading(false); 
  //     }
  //   };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const updatedFormData = { ...formData }; // Assuming formData is correctly populated
  
    // Append cartProducts to updatedFormData
  //   cartProducts.forEach((product, index) => {
  //     const quantity = getItemQuantity(product.id); 
  //     const totalPrice = product.price * quantity; 
  //     updatedFormData[`product${index + 1}_title`] = product.title;
  //     updatedFormData[`product${index + 1}_price`] = `${totalPrice}`; 
  //     updatedFormData[`product${index + 1}_quantity`] = quantity.toString(); 
      
  // });
  updatedFormData['cartValues'] = cartProducts.map(product => ({
    title: product.title,
    price: product.price,
    quantity: getItemQuantity(product.id), // Assuming getItemQuantity takes product ID as argument
}));
    
   console.log(updatedFormData,"formData")
    try {
      const res = await axios.post('/api/order', updatedFormData);
      const data = res?.data;
  
      if (data && data.message === 'Email Sent Successfully') {
    
      } else {
        throw new Error(data?.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  



  return (
    <>
      <Navbar />

      <div className="relative flex justify-center  items-center py-20 bg-[#21201E]  z-10 mob:px-5">
        <div className="max-w-[1340px] w-full ">
          <div className="flex w-full justify-end mb-8">
            <h1 className="text-gradient w-[1290px]  text-[60px] mob:text-[40px] font-outfit font-medium leading-[80px]">
              Checkout
            </h1>
          </div>
          <div className="flex mob:block justify-end items-start gap-16">
            {/* left */}
            <div 
            // onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
            className="max-w-[669px] w-full">
              

                  {/* names */}
                   <div className="flex mob:block items-end gap-7">
                   <div className="w-full">
                   <label
                    htmlFor="First Name"
                    className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
                   >
                    First Name*
                  </label>
                  <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                    className="w-full  h-[29px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 required "
                    type="text"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="Last Name"
                    className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
                  >
                    Last Name*
                  </label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full  h-[29px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="text"
                    required
                  />
                </div>
              </div>

 {/* company name */}
 <label
                htmlFor="Email Address"
                className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
              >
              Company Name (Opional)
              </label>
              <input
               name="companyName"
               value={formData.companyName}
               onChange={handleInputChange}
                className="w-full  h-[29px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                type="text"
              />


              {/* inputes */}
              <label
                htmlFor="Email Address"
                className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
              >
                Email Address*
              </label>
              <input
               name="email"
               value={formData.email}
               onChange={handleInputChange}
                className="w-full  h-[29px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                type="email"
                required
              />

             

              {/* countery */}
              <label
                htmlFor="Country/Region"
                className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
              >
                Country/Region
              </label>
              <input
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full  h-[29px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                type="text"
                
              />

         
              {/* Address */}
              <label
                htmlFor="Address"
                className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
              >
                Address*
              </label>
              <input
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full  h-[29px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                type="text"
                required
              />

              {/* state */}
              <div className="flex mob:block items-end gap-7">
                <div className="w-full">
                  <label
                    htmlFor="City"
                    className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
                  >
                    City*
                  </label>
                  <input
                   name="city"
                   value={formData.city}
                   onChange={handleInputChange}
                    className="w-full  h-[29px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="text"
                    required
                    
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="State"
                    className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
                  >
                    State*
                  </label>
                  <input
                   name="state"
                   value={formData.state}
                   onChange={handleInputChange}
                    className="w-full  h-[29px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="text"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="Zip Code"
                    className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
                  >
                    Zip Code*
                  </label>
                  <input
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full  h-[29px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="number"
                    required
                  />
                </div>
              </div>

              {/* phone  */}
              <label
                htmlFor="Phone Number"
                className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
              >
                Phone Number*
              </label>
              <input
               name="number"
               value={formData.number}
               onChange={handleInputChange}
                className="w-full  h-[29px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                type="number"
                required
              />


              {/* Shipping method */}
              <h1 className="text-[#FFFFFF] uppercase text-[17px] font-bold font-jakrata tracking-[3px] mt-12 mb-8">
             Additional Information
              </h1>
              <label
                className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
                htmlFor="shipping address"
              >
                Enter your shipping address to view available shipping methods
              </label>
              <input
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                className="w-full  h-[29px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                type="text"
              />

              {/* Payment */}
              <h1 className="text-[#FFFFFF] uppercase text-[17px] font-bold font-jakrata tracking-[3px] mt-12 mb-8">
                Payment
              </h1>

              <div className="w-full h-[59px] paymentbg flex gap-3 items-center px-4">
                <Image src={credit} alt="" width={18} height={18} />
                <p className="text-[14px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata">
                  Credit card
                </p>
              </div>
              {/* card detail */}
{/* <button className="text-white" onClick={handleSubmit}>handleSubmit</button> */}
              <Elements stripe={stripePromise}>
                <StripeForm formData={formData} handleSubmit={handleSubmit} />
              </Elements>

              {/* card detail */}
              <div className="bg-[#13121180]/50 px-4 py-4">
                {/* <input
                  className="w-full py-3 outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                  type="text"
                  placeholder="Card number"
                />

                <div className="flex mob:block items-center gap-7">
                  <input
                    className="w-full py-3 outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="text"
                    placeholder="Expiration date (MM / YY)"
                  />
                  <input
                    className="w-full py-3 outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="text"
                    placeholder="Security code"
                  />
                </div> */}

         
                {/* <p className="text-[16px] text-[#FFFFFF]/80 leading-[20.16px] font-normal font-jakrata pb-6">
                  Use shipping address as billing address
                </p> */}
            
              </div>


           

            </div>

            {/* right */}
            <div className="bg-[#131211] w-full max-w-[537px]  p-10">
              <h1 className="uppercase text-[17px] text-[#fff] font-jakrata font-bold leading-[21.42px] tracking-[3px]">
                Summary
              </h1>

              {/* subtotal */}
              {cartProducts.map((product) => (
                <Fragment key={product.id}>
            <div className="flex justify-between mt-12">
                <div className="flex  gap-5">
                  <Image
                    className="h-[72px]"
                    src={product.img}
                    alt=""
                    width={82}
                    height={72}
                  />
                  <h2 className=" text-[18px] text-[#fff] font-jakrata font-medium leading-[21.42px] mt-1">
                  {product.title}
                  </h2>
                </div>
                <div className="">
                  <p className=" text-[22px] text-right text-[#fff] font-jakrata font-medium leading-[21.42px] ">
                  ${product.price * getItemQuantity(product.id)}
                  </p>
                  <div className="bg-[#FFFFFF] my-3 rounded-[3px] h-[32px] flex items-center p-3 justify-between">
                    <p className=" text-[16px] text-right pr-2 text-[#A0A0A0] font-jakrata font-normal leading-[21.42px] ">
                      Qty
                    </p>
                  <div className="flex items-center">
                      {/* decrease quantity */}
                      <button
                          className=" px-2 mb-[2px] font-medium text-[25px]"
                          onClick={() => decreaseCartQuantity(product.id)}
                        >
                         -
                        </button>

                        {/*  quantity */}
                    <p className=" text-[16px] text-right text-[#5B5B5B] font-jakrata font-normal leading-[21.42px] ">
                 {getItemQuantity(product.id)}
               
                    </p>
{/* increase quantity */}
                    <button
                          className=" pl-2 font-medium text-[25px] mb-[2px]"
                          onClick={() => increaseCartQuantity(product.id)}
                        >
                         +
                        </button>
                  </div>
                  </div>
                  <div onClick={() => removeFromCart(product.id)} className="flex justify-end cursor-pointer">
                    <Image src={remove} alt="" width={63} height={24} />
                  </div>{" "}
                </div>
              </div>

                </Fragment>
              ))}
              
              <div className="flex justify-between gap-4 mt-7">
                <div className=" items-center  w-full">
                  {/* <h2 className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                    Tax
                  </h2> */}
                  <div className="pt-4 max-w-[1140px]  w-full">
                    <hr className="h-px  bg-[#FFFFFF33]/20 border-0 dark:bg-[#FFFFFF33]"></hr>
                  </div>
                </div>
                {/* button */}
                {/* <button className="w-[101px] h-[43px] uppercase  bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Apply
                </button> */}
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center mt-7">
                <h2 className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                  Subtotal
                </h2>
                <p className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                ${cartProductsTotalPrice || 0}
                </p>
              </div>

              {/* Tax */}
              {/* <div className="flex justify-between items-center mt-3">
                <h2 className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                  Tax
                </h2>
                <p className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                  $0.00
                </p>
              </div> */}

              {/* shipping */}
              <div className="flex justify-between items-center mt-3">
                <h2 className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                  Shipping
                </h2>
                <p className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                 Free
                </p>
              </div>


      {/* total */}
      <div className="flex justify-between items-center mt-3 ml-[2px]">
                <h2 className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                  Total
                </h2>
                <p className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                ${cartProductsTotalPrice || 0}
                </p>
              </div>
              <div className="py-8 max-w-[1140px]  w-full">
                <hr className="h-px  bg-[#FFFFFF33]/20 border-0 dark:bg-[#FFFFFF33]"></hr>
              </div>

              <div className="flex justify-start gap-3 items-center ">
                <Image src={medalimg} alt="" width={20.22} height={23.22} />{" "}
                <h1 className="uppercase text-[15px] text-[#fff] font-jakrata font-bold leading-[21.42px] tracking-[3px]">
                  SECURE CHECKOUT
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
