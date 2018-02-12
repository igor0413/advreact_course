import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import AdminPsge from './routes/AdminPage'
import AuthPage from './routes/AuthPage'
import ProtectedRoute from './common/ProtectedRoute'

class Root extends Component {
  render() {
    return (
      <div>
        <ProtectedRoute path={'/admin'} component={AdminPsge}/>
        <Route path={'/auth'} component={AuthPage}/>
      </div>
    );
  }
}

export default Root;
