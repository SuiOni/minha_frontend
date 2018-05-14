import React from 'react';
import styled from 'styled-components';

const AboutDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 300px;
`;

const About = () => (
  <AboutDiv className="about">
    <h1>Edit About component or pages/about.jsx to include your information.</h1>
  </AboutDiv>
);

export default About;
