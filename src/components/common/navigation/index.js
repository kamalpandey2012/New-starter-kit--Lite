import './primary-navigation.css';
import React, { Component } from 'react';
import Navigation from './navigation';
import Sidebar from './sidebar';

const logo = require('../assets/logo.png');

class PrimaryNavigation extends Component {
  render() {
    const activeStyle = { color: '#f70001' };
    return (
      <div className="navigation-container">
        <Navigation activeStyle={activeStyle} logo={logo} />
        <Sidebar activeStyle={activeStyle} />
      </div>
    );
  }
}

export default PrimaryNavigation;
