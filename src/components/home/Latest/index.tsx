"use client";
import React, { useState } from "react";
import Image from "next/image";
import buttonimg from "@/public/imgs/home/button.png";

const Latest = () => {

  const [email, setEmail] = useState("");

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

    // Validation: Check if any required field is empty
    if (!email) {
      alert("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // If response is successful
        setSuccessMessage(" Subscribed  Successfully!");
        // alert("Email sent successfully!");
        console.log(data); // You can log data if needed

        // Reset input fields

        setEmail("");
      } else {
        // If response is not successful
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      // If there's an error during the fetch
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false); // Set loading state to false when request is completed
    }
  };


  return (
    <>
      <div className="flex justify-center items-center mt-16 mob:mt-0 mob:pb-[70px] mob:px-5">
        <div className="flex relative z-50 justify-center mob:px-5 items-center w-full border-gradeint max-w-[1340px] min-h-[492px] bg-[#161616CC]/80 ">
          <div className="  justify-center  max-w-[1141px] w-full">
            <div className="flex mob:block w-full justify-between items-end max-w-[1141.5px] my-8">
              {/* left text */}
              <div className="">
                <h2 className="text-[20px] tracking-[3px] mob:text-center mb-4 font-jakrata uppercase font-normal leading-[25.2px] mob:text-[16px] mob:leading-[20px] text-[#FFFFFF]">
                  NewsLetter
                </h2>
                <h1 className="text-[40px] mob:text-[30px] font-outfit mob:text-center font-medium leading-[50.4px] text-[#c8c82d]">
                  Be the first to know.
                </h1>
              </div>
              {/* right text */}
              <div className="">
                <p className="font-jakrata font-normal mob:text-center tracking-[1px] text-[20px] mob:text-[16px] mob:leading-[20px] leading-[33px] text-[#FFFFFF]">
                  Latest news about EasyShop
                </p>
              </div>
            </div>
            {/* inpute */}
            <div className="flex mob:block justify-between items-end">
              <div className="pr-8 mob:pr-0 w-full mob:my-4">
              <div className="mob:flex mob:justify-center">
              <label
                  className="text-[#FFFFFF]/70 mob:text-center mob:text-[16px] mob:leading-[20px]  text-[20px] font-normal font-jakrata leading-[30px]"
                  htmlFor="email"
                >
                  Email Address here...
                </label>{" "}
              </div>
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                <input
                  className="border-b py-4 outline-none text-[#FFFFFF] border-[#FFFFFF33] bg-transparent w-full"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                />
              </div>

              
           <div className="mob:flex mob:justify-center">
           <button   
                    className=" py-[20px] px-[40px] mob:px-[30px] mob:py-[15px]  rounded-[150px] bg-[#c8c82d] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata"
               onClick={sendMail}
            disabled={loading} 
            >
               Submit
              
              </button>
           </div>

        
            </div>
            {successMessage && (
          <p
            className="text-[20px] font-bold text-green-500 leading-7 text-center pt-4">
            {successMessage}
          </p>
        )}

<div className="flex w-full justify-center pt-2">

{loading ? <div role="status">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#C98200]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div> : ""}

</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Latest;
