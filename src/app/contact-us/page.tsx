

import Form from "@/components/Contactus/Form";
import Footermain from "@/components/Footermain/Footermain";
import Latest from "@/components/home/Latest";
import Image from "next/image";
import React from "react";
import bg from "@/public/Noise-Animation.png";

const contactus = () => {
  return (
    <>
      
          <Form />
          <Latest />
          <Footermain />
      
    </>
  );
};

export default contactus;
