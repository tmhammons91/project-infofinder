import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import Main from '../pages/Main'
import WelcomePage from '../pages/WelcomePage'
import AdminPage from '../pages/Admin'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
  
      <Route path="admin" component={AdminPage}/>
          <IndexRoute component={WelcomePage}/>
    </Route>
  </Router>
);


