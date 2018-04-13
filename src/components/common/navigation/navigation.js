import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Navigation = ({ activeStyle, logo, onClickOpenSidebar }) => {
  return (
    <div className="navigation">
      <ul className="primary-navigation" role="navigation">
        <li className="sidebar-button"><button className="sidebar-button" onClick={onClickOpenSidebar}><i className="fa fa-bars"></i></button></li>
        <li className="brand"><NavLink exact to="/"><img src={logo} alt="logo" /></NavLink></li>
        <li className="brand-name"><span className="accent">Kon</span>finity</li>
        <ul className="left">
          <li className="links"><NavLink to="/add-course" activeStyle={activeStyle}>Add course</NavLink></li>
          <li className="links"><NavLink to="/about" activeStyle={activeStyle}>About</NavLink></li>
          <li className="links"><NavLink to="/not-found" activeStyle={activeStyle}>No link</NavLink></li>
        </ul>
        <ul className="user-profile">
          <li className="user-icon"><NavLink to="/profile" activeStyle={activeStyle}><i className="fa fa-user"></i></NavLink></li>
        </ul>
      </ul>
    </div>
  );
}

const { object, string, func } = PropTypes;

Navigation.propTypes = {
  activeStyle: object.isRequired,
  logo: string.isRequired,
  onClickOpenSidebar: func.isRequired
}

export default Navigation;
