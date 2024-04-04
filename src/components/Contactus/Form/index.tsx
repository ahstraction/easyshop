// @ts-nocheck
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import Navbar from "@/components/navbar/Navbar";
// import Text from "@/components/ui/Text";
// import Navbar from "@/components/Aboutus/Header/index";

import fb from "@/public/imgs/icons/fb.svg";
import insta from "@/public/imgs/icons/insta.svg";
import twiter from "@/public/imgs/icons/twitter.svg";
import Link from "next/link";
// import youtube from "@/public/imgs/icons/youtube.svg";
// import location from "@/imgs/contact/carbon_location-filled.png";
// import mail from "@/imgs/contact/fluent_mail-16-filled.svg";
// import bgright from "@/imgs/contact/bgright.png";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendMail = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("clicked",fname);
    if (!fname  || !lname  || !email || !phone || !message) {
      alert("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          
          email,
          phone,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // If response is successful
        setSuccessMessage("Email Sent Successfully!");
        // alert("Email sent successfully!");
        console.log(data); // You can log data if needed

        // Reset input fields
        setFname("");
        setLname("");
       
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        // If response is not successful
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {

      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" ">
        <Navbar />

        <div className="flex justify-center items-center relative pt-20 pb-32 gradient-background ">
          <div className="w-full max-w-[1444px] relative ">
            {/* right img */}
            {/* <Image
              className="absolute top-[-250px] right-0 mob:hidden z-10"
              src={bgright}
              alt=""
              width={1047.11}
              height={953.65}
            /> */}

            <div className="flex xl:block justify-center items-end  gap-[100px] px-[5%] relative z-20 ">
              {/* left */}
              <div className="xl:flex xl:justify-center">
                <div className="  w-full max-w-[453px]">
                  <h1 className="text-[60px] mob:text-center mob:text-[30px]  font-outfit  text-gradient leading-[62px] font-medium mb-7 mt-3 ">
                    Get In Touch
                  </h1>
                  {/* <p className="text-[18px] mob:text-[14px] mob:leading-[24px] text-[#FFFFFF]/70  leading-[33px] font-jakrata font-normal ">
                    Donec faucibus semper massa, quis congue dolor et. 
                  </p> */}
                  {/* locations London*/}
                  <div className="flex mob:justify-center gap-3 mt-16">
                    {/* <div className="img">
                      <Image src={location} alt="" width={80} height={80} />
                    </div> */}

                    <div className="">
                      <h1 className="text-[18px] mob:text-center mob:text-[q6px] text-gradient leading-[26px] font-semibold font-jakrata mb-2 ">
                        Location
                      </h1>

                      <h1 className="text-[16px] mob:text-center mob:text-[14px] mob:leading-[24px] text-[#fff] font-jakrata leading-[33px] font-normal ">
                      P.O. Box 317, Annandale, VA 22003
                      </h1>
                      {/* <h1
                        
                        className="text-[16px] items-center flex gap-[8px] text-[#fff] leading-[26px] font-normal my-1 cursor-pointer "
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {
                          window.location.href = "tel: +44 (20) 3666 5000";
                        }}
                      >
                        <span className="text-[#00297A]">
                          <FaPhoneAlt />
                        </span>
                        +44 (20) 3666 5000
                      </h1> */}
                    </div>
                  </div>

                  {/* number*/}
                  <div className="flex mob:justify-center gap-3 mt-9">
                    {/* <div className="img">
                      <Image src={location} alt="" width={80} height={80} />
                    </div> */}

                    <div className="">
                      <h1 className="text-[18px] mob:text-center mob:text-[q6px] text-gradient leading-[26px] font-semibold font-jakrata mb-2 ">
                        Phone Number
                      </h1>

                      <h1
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {
                          window.location.href = "tel: +703.618.8777";
                        }}
                      className="text-[16px] mob:text-center mob:text-[14px] cursor-pointer mob:leading-[24px] text-[#fff] font-jakrata leading-[33px] font-normal ">
                      703.618.8777
                      </h1>
                    </div>
                  </div>

                  {/* locations usa*/}
                  <div className="flex mob:justify-center gap-3 mt-8">
                    {/* <div className="img">
                      <Image src={location} alt="" width={80} height={80} />
                    </div> */}

                    <div className="">
                      <h1 className="text-[18px] mob:text-center mob:text-[q6px] text-gradient leading-[26px] font-semibold font-jakrata mb-2 ">
                        Email Address
                      </h1>

                      <h1
                      
                      onClick={(
                        event: React.MouseEvent<HTMLAnchorElement>
                      ) => {
                        window.location.href = "mailto:bop@philliebopmusic.com";
                      }}
                      className="text-[16px] mob:text-center mob:text-[14px] cursor-pointer mob:leading-[24px] text-[#fff] font-jakrata leading-[33px] font-normal ">
                       bop@philliebopmusic.com
                      </h1>
                    </div>
                  </div>

                  {/* social icons */}
                  <div className="flex w-full xl:justify-center gap-[20px] mt-16 ">
                    {/* facebook */}

                    <Link href="https://www.facebook.com/philliebopproductions">
                    <Image src={fb} alt="" width={43} height={43} />

              </Link>

              <Link href="https://www.instagram.com/philliebopproductions/">
              <Image src={insta} alt="" width={43} height={43} />
              </Link>
                    

              <Link href="https://twitter.com/PhillieBOP">
              <Image src={twiter} alt="" width={43} height={43} />
              </Link>
                   
                  </div>
                </div>
              </div>

              {/* right */}

              <div className="xl:flex xl:justify-center">
                <div className=" justify-center w-full xl:mt-10 max-w-[530px] px-16 mob:px-8 py-20 bg-[#131211]  max-h-[564px] xl:max-h-full">
                  <label
                    htmlFor="First Name"
                    className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full  h-[25px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="text"
                    value={fname}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    // placeholder="First Name"
                  />
                  <label
                    htmlFor="Last Name"
                    className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full  h-[25px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="text"
                    value={lname}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                    // placeholder="First Name"
                  />

                  <label
                    htmlFor="Email address"
                    className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
                  >
                    Email address
                  </label>
                  <input
                    className="w-full  h-[25px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="Email address"
                    // placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                  />
                  {emailError && <p style={{ color: "red" }}>{emailError}</p>}

                  <label
                    htmlFor="Mobile number"
                    className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
                  >
                    Mobile number
                  </label>
                  <input
                    className="w-full  h-[25px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    // placeholder="Phone Number"
                  />

                  <label
                    htmlFor="Message"
                    className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full  h-[25px]  outline-none border-b bg-transparent border-b-[#FFFFFF]/20 text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    // placeholder="Message"
                  ></textarea>

                  <button
                    type="submit"
                    onClick={sendMail}
                    className=" py-[15px] px-[30px] rounded-[150px] bg-[#FFFFFF] uppercase tracking-[1px] text-[#121212] text-[15px] leading-[18.9px] font-semibold font-jakrata"
                    disabled={loading} // Disable button if loading state is true
                  >
                    {loading ? "Sending..." : "Submit"}
                    {/* Submit */}
                  </button>
                  {successMessage && (
                    <h1 className="text-[24px] font-bold text-green-500 leading-7 text-center pt-4">
                      {successMessage}
                    </h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
