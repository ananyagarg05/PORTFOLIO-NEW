import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ContactSection = styled.section`
  background-color: #333;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="cta-btn">
          Send Message
        </button>
      </form>
    </ContactSection>
  );
};

export default Contact;
