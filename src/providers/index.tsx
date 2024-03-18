"use client";
import React from "react";
import { Provider } from "jotai";

interface ProvidersProps {
  children: React.ReactNode;
}

const DefaultProvider: React.FC<ProvidersProps> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default DefaultProvider;
