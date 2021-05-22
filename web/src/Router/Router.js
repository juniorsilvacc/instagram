import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Feed from '../Pages/Feed';
import Post from '../Pages/Post';
import Profile from '../Pages/Profile';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Login/>
        </Route>
        <Route path='/register' exact>
          <Register/>
        </Route>
        <Route path='/feed' exact>
          <Feed/>
        </Route>
        <Route path='/post' exact>
          <Post/>
        </Route>
        <Route path='/profile' exact>
          <Profile/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
