import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import AdminPsge from './routes/AdminPage'
import AuthPage from './routes/AuthPage'

class Root extends Component {
  render() {
    return (
      <div>
        <Route path={'/admin'} component={AdminPsge}/>
        <Route path={'/auth'} component={AuthPage}/>
      </div>
    );
  }
}

export default Root;
