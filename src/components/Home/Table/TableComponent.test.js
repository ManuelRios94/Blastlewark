import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import ReactTable from "react-table";

import { Table } from './TableComponent';

const setUp = (props={}) => {
  const component = mount(<Table {...props}/>);
  return component
}

describe('<Table />', () => {

  let component;
  beforeEach(() => {
    const props = {
        localPopulation: {},
        onClick: () => {}
    }
    component = setUp(props);
  })

  it('It should render without crashing', () => {
    expect(component.length).to.equal(1);
  });

  it('It should render a react table', () => {
    expect(component.find(ReactTable)).to.have.lengthOf(1);
  });

});