import React, { Component } from 'react';
import { Follow } from 'react-twitter-widgets';

const UserInfo = ({ config, expanded }) => (
  <Follow username={config.userTwitter} options={{ count: expanded ? true : 'none' }} />
);

export default UserInfo;
