import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #111;
  color: white;
  text-align: center;
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I am Ananya Garg</h1>
        <p>I design and build amazing web experiences</p>
        <button className="cta-btn">Get In Touch</button>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;
