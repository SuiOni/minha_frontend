import React, { Component } from 'react';
import './UserLinks.css';

const getLinkElements = (userLinks, labeled) =>
  userLinks.map(link => (
    <button key={link.label} href={link.url}>
      {labeled ? link.label : ''}
    </button>
  ));

const UserLinks = ({ labeled, config }) =>
  config.userLinks && <div className="user-links">{getLinkElements(config.userLinks, labeled)}</div>;

export default UserLinks;
