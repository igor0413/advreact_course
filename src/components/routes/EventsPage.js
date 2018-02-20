import React, {Component} from 'react';
import EventsList from '../events/EventList'

class EventsPage extends Component {
  render() {
    return (
      <div>
        <h1>Event page</h1>
        <EventsList/>
      </div>
    );
  }
}


export default EventsPage;
