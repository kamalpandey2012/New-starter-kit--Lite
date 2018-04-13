/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import Routes from './routes';
import PrimaryNavigation from './common/navigation';
import './common/styles/reset.css';
import './common/styles/fonts.css';
import './common/styles/root.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <PrimaryNavigation />
        <Routes />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
