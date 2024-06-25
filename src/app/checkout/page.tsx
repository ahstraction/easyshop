import React from "react";
import Form from "@/components/Checkout/Form";

import Footermain from "@/components/Footermain/Footermain";
import Latest from "@/components/home/Latest";
import Image from "next/image";
import bg from "@/public/Noise-Animation.png";

const checkout = () => {
  return (
    <>
      
          <Form />

          <Latest />
          <Footermain />
    
    </>
  );
};

export default checkout;
