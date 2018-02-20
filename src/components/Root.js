import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import AdminPage from './routes/AdminPage'
import AuthPage from './routes/AuthPage'
import PersonPage from './routes/PersonPage'
import EventsPage from './routes/EventsPage'
import ProtectedRoute from './common/ProtectedRoute'

class Root extends Component {
  render() {
    return (
      <div>
        <ProtectedRoute path={'/admin'} component={AdminPage}/>
        <ProtectedRoute path={'/people'} component={PersonPage}/>
        <ProtectedRoute path={'/events'} component={EventsPage}/>
        <Route path={'/auth'} component={AuthPage}/>
      </div>
    );
  }
}

export default Root;
