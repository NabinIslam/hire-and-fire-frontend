"use client";
import { CustomProvider } from "rsuite";

const RsuiteProvider = ({ children }) => {
  return <CustomProvider>{children}</CustomProvider>;
};

export default RsuiteProvider;
