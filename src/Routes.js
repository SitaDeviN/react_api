import React from 'react';
import { Route } from 'react-router-dom';
import MainContent from './JS/MainContent';
import Login from './JS/Login';

function Routes() {
  return (
    <div>
      <Route exact path="/" component={MainContent} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default Routes;
