import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { validateToken as validateTokenAction } from '../../redux/modules/auth';
import { noop } from '../../utils';
import Loader from '../../components/Loader';

const checkIsRouteAllowed = ({ role, allowedUserGroups }) => {
  if (allowedUserGroups === 'all') return true;

  return allowedUserGroups.some(userRole => userRole === role);
};

const ProtectedRoute = ({ component: Component, auth, validateToken, location, allowedUserGroups, ...rest }) => {
  const { isAuthenticated, isAuthenticating, role } = auth;
  const isRouteAllowed = checkIsRouteAllowed({ role, allowedUserGroups });

  useEffect(() => {
    if (!isAuthenticated) validateToken();

    return noop;
  }, [validateToken]);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticating) return <Loader />;

        if (!isAuthenticated) return <Redirect to={{ pathname: '/login', state: { from: location } }} />;

        if (!isRouteAllowed) {
          return <Redirect to={{ pathname: '/', state: { from: location } }} />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  validateToken: PropTypes.func.isRequired,
  component: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  allowedUserGroups: PropTypes.oneOf(['all', PropTypes.arrayOf(PropTypes.string)]),
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

ProtectedRoute.defaultProps = {
  location: null,
  component: null,
  allowedUserGroups: 'all',
};
export default connect(
  ({ auth }) => ({ auth }),
  { validateToken: validateTokenAction },
)(ProtectedRoute);
