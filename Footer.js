import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: #111;
  color: white;
  text-align: center;
  padding: 2rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>&copy; 2025 Ananya Garg - All Rights Reserved</p>
    </FooterSection>
  );
};

export default Footer;
