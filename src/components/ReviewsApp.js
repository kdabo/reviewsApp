import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { ReviewsPage, NotFound } from '.';

class _ReviewsApp extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="center-align"> Reviews for Hotel </h1>
        <div className="row">
          <Switch>
            <Route exact path="/" component={ReviewsPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export const ReviewsApp = withRouter(_ReviewsApp);
