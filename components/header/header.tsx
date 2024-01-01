"use client";

import { useState } from "react";
import Sidebar from "./mobile-menu";
import Navbar from "./main-nav";
import NavbarActions from "./navbar-actions";

const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Navigation;