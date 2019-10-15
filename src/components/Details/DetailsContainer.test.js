import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { DetailsContainer } from './DetailsContainer';
import { Details } from './DetailsComponent';

const setUp = (props={}) => {
  const component = shallow(<DetailsContainer {...props}/>);
  return component
}

describe('<DetailsContainer />', () => {

  let component;
  beforeEach(() => {
    const props = {
        selectedLocalPopulation: {
          name: 'test',
          thumbnail: 'img-path',
          age: 44,
          weight: 11.11,
          height: 22.22,
          hair_color: 'Pink',
          professions: ['Cooker'],
          friends: ['John']
        }
    }
    component = setUp(props);
  })

  it('It should render without crashing', () => {
    expect(component.length).to.equal(1);
  });

  it('It should render details', () => {
    expect(component.find(Details)).to.have.lengthOf(1);
  });

});
