import React, {Component} from 'react'
import {connect} from 'react-redux'
import {moduleName, fetchAll, eventListSelector} from '../../ducks/events'

class EventList extends Component {

  componentDidMount() {
    this.props.fetchAll()
  }

  render() {
    return (
      <div>
        <table>
          <tbody>{this.getRows()}</tbody>
        </table>
      </div>
    );
  }

  getRows() {
    return this.props.events.map(this.getRow())
  }

  getRow(event) {
    return <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  }
}

export default connect(state => ({
  events: eventListSelector(state)
}), {fetchAll})(EventList)
