import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as userActions from '../actions/user-actions';

const authHandler = (Component) => {
  class Handler extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.user.isLoggedIn) {
        const location = this.props.location;
        const redirect = location.pathname + location.search;
        this.props.actions.go_to_auth_page({ redirect });
      }
    }


    render() {
      return this.props.user.isLoggedIn ? <Component /> : null;
    }
  }

  const { object } = PropTypes;
  Handler.propTypes = {
    actions: object.isRequired,
    user: object.isRequired,
    location: object.isRequired
  }

  function mapStateToProps(state) {
    return {
      user: state.user
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(userActions, dispatch)
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Handler);
}

export default authHandler;
