import React from 'react';
import { Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { handleTabInputChange } from '../../reducer/tab.reducer';

function Tab() {
  const dispatch = useDispatch();
  const { initial_value } = useSelector((state) => state.tab);
  const HandleChange = (event) => {
    event.preventDefault();
    if (event) {
      dispatch(
        handleTabInputChange({
          name: event.target.name,
          value: event.target.value,
        })
      );
    }
  };
  return (
    <Tabs defaultActiveKey={1} id='uncontrolled-tab-example'>
      <Tab eventKey={1} title='Tab 1'>
        <input
          name='first_name'
          type='text'
          placeholder='first name'
          onChange={(e) => HandleChange(e)}
        />
        <input
          name='last'
          type='text'
          placeholder='last name'
          onChange={(e) => HandleChange(e)}
        />
        <input
          name='email'
          type='text'
          placeholder='email'
          onChange={(e) => HandleChange(e)}
        />
      </Tab>
      <Tab eventKey={2} title={'Second Tab'}>
        <div>{initial_value.first_name}</div>
      </Tab>
      <Tab eventKey={3} title={'Third Tab'}>
        <div>{initial_value.last}</div>
      </Tab>
      <Tab eventKey={4} title={'Fourth Tab'}>
        <div>{initial_value.email}</div>
      </Tab>
    </Tabs>
  );
}

export default Tab;
