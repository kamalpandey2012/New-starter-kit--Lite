import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home-page';
import AboutPage from './about-page';
import NotFoundPage from './not-found-page';
import AddPage from './addPage/add-page';
import AddDemo from './addDemo/add-demo';
import Login from './auth/login_page';
import authHandler from '../handlers/authHandlers';

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/add" component={authHandler(AddPage)} />
      <Route path="/add-demo" component={authHandler(AddDemo)} />
      <Route path="/login" component={Login} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default routes;
