"use client";

import { useState } from "react";
import Sidebar from "./mobile-menu";

const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navigation;