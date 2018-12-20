import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Page403 from '../errors/Page403'
import Page404 from '../errors/Page404'
import Page500 from '../errors/Page500'
import AsyncHomeProfile from '../async/AsyncHomeProfile';
class App extends Component {
  render() {
    return (
      <Switch>
        {/* <PrivateRoute exact path="/" name="Home" component={Home} /> */}
        <Route exact path="/" component={AsyncHomeProfile} />
        <Route exact path="/403" component={Page403} />
        <Route exact path="/404" component={Page404} />
        <Route exact path="/500" component={Page500} />
        <Redirect from="/" to="/" />
      </Switch>
    );
  }
}

export default App;
