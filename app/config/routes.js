import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import Main from '../pages/Main'
import WelcomePage from '../pages/WelcomePage'
import SecondPage from '../pages/SecondPage'
import SecondPageExample from "../pages/SecondPageExample"

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
  
      <Route path="secondpage" component={SecondPage}/>
      <Route path="secondpageexample" component={SecondPageExample}/>
          <IndexRoute component={WelcomePage}/>
    </Route>
  </Router>
);


