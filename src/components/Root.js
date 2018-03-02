import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import AdminPage from './routes/AdminPage'
import AuthPage from './routes/AuthPage'
import PeoplePage from './routes/PeoplePage'
import ProtectedRoute from './common/ProtectedRoute'
import {connect} from 'react-redux'
import {moduleName, signOut} from '../ducks/auth'
import {Link} from 'react-router-dom'
import CustomDragLayer from './CustomDragLayer'

class Root extends Component {
  static propTypes = {

  };

  render() {
    const {signOut, signedIn} = this.props
    const btn = signedIn
      ? <button onClick = {signOut}>Sign out</button>
      : <Link to="/auth/signin">sign in</Link>
    return (
      <div>
        {btn}
        <ul>
          <li><Link to="/admin">admin</Link></li>
          <li><Link to="/people">people</Link></li>
          <li><Link to="/events">events</Link></li>
        </ul>
        <ProtectedRoute path="/admin" component={AdminPage}/>
        <ProtectedRoute path="/people" component={PeoplePage}/>
        <Route path="/auth" component={AuthPage}/>
        <CustomDragLayer/>
      </div>
    )
  }
}

export default connect(state => ({
  signedIn: !!state[moduleName].user
}), {signOut}, null, {pure: false})(Root)
