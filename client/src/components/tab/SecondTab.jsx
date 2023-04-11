import React from 'react';
import { Tab } from 'react-bootstrap';

function SecondTab({ initial, eventKey, title }) {
  return (
    <Tab eventKey={eventKey} title={title}>
      <div>{initial.first_name}</div>
      <div>{initial.last}</div>
      <div>{initial.email}</div>
    </Tab>
  );
}

export default SecondTab;
