"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import Navbar from "@/components/navbar/Navbar";
// import Text from "@/components/ui/Text";
// import Navbar from "@/components/Aboutus/Header/index";

// import fb from "@/imgs/contact/Group 2.svg";
// import insta from "@/imgs/contact/Group 3.svg";
// import twiter from "@/imgs/contact/Group 4.svg";
// import youtube from "@/imgs/contact/Group 5.svg";
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
console.log("clicked")
    // if (!fname || !lname || !email || !phone || !message) {
    //   alert("Please fill in all fields");
    //   return;
    // }

    // if (!validateEmail(email)) {
    //   setEmailError("Please enter a valid email address");
    //   return;
    // }

    setLoading(true);

    // try {
    //   const response = await fetch("/api/sendEmail", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       fname,
    //       lname,
    //       email,
    //       phone,
    //       message,
    //     }),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     // If response is successful
    //     setSuccessMessage("Email Sent Successfully!");
    //     // alert("Email sent successfully!");
    //     console.log(data); // You can log data if needed

    //     // Reset input fields
    //     setFname("");
    //     setLname("");
    //     setEmail("");
    //     setPhone("");
    //     setMessage("");
    //   } else {
    //     // If response is not successful
    //     throw new Error(data.message || "Failed to send email");
    //   }
    // } catch (error) {
     
    //   console.error("Error sending email:", error);
    //   alert("Failed to send email. Please try again later.");
    // } finally {
    //   setLoading(false); 
    // }
  };

  return (
    <>
      <div className="bg-[#21201E]  ">
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

            <div className="flex xl:block  justify-between px-[5%] relative z-20 ">
              {/* left */}
              <div className="xl:flex xl:justify-center">
                <div className="  w-full max-w-[453px]">
                  <h1
                  
                    className="text-[64px] mob:text-center mob:text-[30px]   text-gradient leading-[62px] font-bold mb-7 mt-3 "
                  >
                    Contact Us
                  </h1>
                  <p className="text-[16px] mob:text-[14px] mob:leading-[24px] text-[#fff]  leading-[26px] font-normal ">Donec faucibus semper massa, quis congue dolor et. </p>
                  {/* locations London*/}
                  <div className="flex gap-3 mt-16">
                    {/* <div className="img">
                      <Image src={location} alt="" width={80} height={80} />
                    </div> */}

                    <div className="">
                      <h1
                      
                        className="text-[24px] mob:text-[20px] text-gradient leading-[26px] font-bold mb-2 "
                      >
                      Location
                      </h1>

                      <h1
                   
                        className="text-[16px] mob:text-[14px] mob:leading-[24px] text-[#fff]  leading-[26px] font-normal "
                      >
                     7401 Wiles Rd, Coral Springs FL, 33067
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

                  {/* dc*/}
                  <div className="flex gap-3 mt-8">
                    {/* <div className="img">
                      <Image src={location} alt="" width={80} height={80} />
                    </div> */}

                    <div className="">
                      <h1
                   
                        className="text-[24px] mob:text-[20px] text-gradient leading-[26px] font-bold mb-2 "
                      >
                Phone Number
                      </h1>

                      <h1
                     
                        className="text-[16px] mob:text-[14px] mob:leading-[24px] text-[#fff] leading-[26px] font-normal "
                      >
                       949-981-2225
                      </h1>

                      
                      
                    </div>
                  </div>

                  {/* locations usa*/}
                  <div className="flex gap-3 mt-8">
                    {/* <div className="img">
                      <Image src={location} alt="" width={80} height={80} />
                    </div> */}

                    <div className="">
                      <h1
                      
                        className="text-[24px] mob:text-[20px] text-gradient leading-[26px] font-bold mb-2 "
                      >
                     Email Address
                      </h1>

                      <h1
                        
                        className="text-[16px] mob:text-[14px] mob:leading-[24px] text-[#fff] leading-[26px] font-normal "
                      >
                  Bop@philliebopmusic.com
                      </h1>

                  

                    </div>
                  </div>

                  {/* social icons */}
                  <div className="flex w-full xl:justify-center gap-[20px] mt-12 hidden">
                    {/* facebook */}
                    {/* <Image src={fb} alt="" width={43} height={43} />
                    <Image src={insta} alt="" width={43} height={43} />
                    <Image src={twiter} alt="" width={43} height={43} />
                    <Image src={youtube} alt="" width={43} height={43} /> */}
                  </div>
                </div>
              </div>

              {/* right */}

              <div className="xl:flex xl:justify-center">
                <div className=" justify-center w-full xl:mt-10 max-w-[589px] p-10 bg-[#131211] rounded-[20px] max-h-[590px] xl:max-h-full">
                
                

                  <input
                    className="w-full px-6 h-[45px]  outline-none border-b bg-transparent border-b-[#FFFFFF] text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="text"
                    value={fname}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    placeholder="First Name"
                  />

                  <input
                  className="w-full px-6 h-[45px]  outline-none border-b bg-transparent border-b-[#FFFFFF] text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="text"
                    value={lname}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                    placeholder="Last Name"
                  />

                  <input
                   className="w-full px-6 h-[45px]  outline-none border-b bg-transparent border-b-[#FFFFFF] text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                  />
                  {emailError && <p style={{ color: "red" }}>{emailError}</p>}

                  <input
                    className="w-full px-6 h-[45px]  outline-none border-b bg-transparent border-b-[#FFFFFF] text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    type="number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    placeholder="Phone Number"
                  />

                  <textarea
  className="w-full px-6 h-[45px]  outline-none border-b bg-transparent border-b-[#FFFFFF] text-[16px] text-[#FFFFFF] font-normal mb-6 "
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    placeholder="Message"
                  ></textarea>


                  <button
                    type="submit"
                    onClick={sendMail}
                    className=" py-[15px] px-[30px] rounded-[150px] bg-[#FFFFFF] text-[#121212] text-[15px] leading-[18.9px] font-semibold font-jakrataS"
                    disabled={loading} // Disable button if loading state is true
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                  {successMessage && (
                    <h1
                     
                      className="text-[24px] font-bold text-green-500 leading-7 text-center pt-4"
                    >
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