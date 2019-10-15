import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import { Tab, Tabs} from 'react-bootstrap';

import { Details } from './DetailsComponent';

const setUp = (props={}) => {
  const component = mount(<Details {...props}/>);
  return component
}

describe('<Details />', () => {

  let component;
  beforeEach(() => {
    const props = {
        citizen: {
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

  it('It should render the 3 Tabs', () => {
    expect(component.find(Tabs)).to.have.lengthOf(1);
  });

  it('It should render the correct image', () => {
    expect(component.find('img').filterWhere((item) => {
        return item.prop('src') === 'img-path';
      })).to.have.lengthOf(1);
  });

  it('It should render the correct information', () => {
    expect(component.find('.age').text()).to.equal('44');
    expect(component.find('.name').text()).to.equal('test');
    expect(component.find('.weight').text()).to.equal('11.11');
    expect(component.find('.height').text()).to.equal('22.22');
    expect(component.find('.hair_color').text()).to.equal('Pink');
  });

});