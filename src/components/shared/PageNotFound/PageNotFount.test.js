import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import PageNotFound from "./PageNotFound";

const setUp = (props = {}) => {
  const component = shallow(<PageNotFound {...props} />);
  return component;
};

describe("<PageNotFound />", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("It should render without crashing", () => {
    const wrapper = component.find(".PageNotFound");

    expect(wrapper.length).to.equal(1);
  });
});
