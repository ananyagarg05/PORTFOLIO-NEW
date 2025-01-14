import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const WorkSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 4rem 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const Work = () => {
  return (
    <WorkSection id="work">
      <ProjectCard
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>Project 1</h3>
        <p>Description of the project.</p>
      </ProjectCard>
      <ProjectCard
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>Project 2</h3>
        <p>Description of the project.</p>
      </ProjectCard>
      <ProjectCard
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>Project 3</h3>
        <p>Description of the project.</p>
      </ProjectCard>
    </WorkSection>
  );
};

export default Work;
