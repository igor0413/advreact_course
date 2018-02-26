import React, {Component} from 'react';
import NewPersonForm from '../people/NewPersonForm'
import {connect} from 'react-redux'
import {addPerson} from '../../ducks/people'
import PeopleList from '../people/PeopleList'

class PersonPage extends Component {
  render() {
    return (
      <div>
        <h2>Add new person</h2>
        <PeopleList/>
        <NewPersonForm onSubmit={this.props.addPerson}/>
      </div>
    );
  }
}

export default connect(null, {addPerson})(PersonPage)
