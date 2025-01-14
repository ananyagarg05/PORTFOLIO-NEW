import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #333;
  padding: 1rem 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const Navbar = () => {
  return (
    <NavbarContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Portfolio</h1>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
