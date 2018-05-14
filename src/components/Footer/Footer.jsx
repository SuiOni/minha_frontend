// port to styled-systems - exchange icons, change colors add theme provider
import React, { Component } from 'react';
import Link from 'gatsby-link';
import UserLinks from '../UserLinks/UserLinks';
import './Footer.css';


const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${grey};
  background: ${paleGrey};
  box-sizing: border-box;
  margin-top: ${rem(50)};
`;

const FooterLink = styled(Link)`
  color: ${grey};
`;

const Footer = ({ config }) => {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <footer className="footer">
      <UserLinks config={config} labeled />
      <div className="notice-container">
        <h4>{copyright}</h4>

        <Link to={url}>
          <button>Subscribe</button>
        </Link>
        <h4>
          Based on <a href="https://github.com/Vagr9K/gatsby-advanced-starter">Gatsby Advanced Starter</a>.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
