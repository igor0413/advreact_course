import React, {Component} from 'react'
import {connect} from 'react-redux'
import {eventSelector} from '../../ducks/events'

class EventDragPreview extends Component {
  render() {
    return (
      <div>
        {this.props.event.title}
      </div>
    );
  }
}

export default connect((state, props) => {
  return {
    event: eventSelector(state, props)
  }
})(EventDragPreview)
