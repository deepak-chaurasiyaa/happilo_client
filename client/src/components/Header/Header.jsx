import React from 'react';
import Anouncement from './Anouncement';
import IndividualIntervalsExample from './Carousel';
import MidHeader from './MidHeader';
import NavBar from './NavBar';

function Header() {
  return (
    <div>
      <Anouncement />
      <MidHeader />
      <NavBar />
      <IndividualIntervalsExample />
      {/* <IndividualIntervalsExample /> */}
    </div>
  );
}

export default Header;
