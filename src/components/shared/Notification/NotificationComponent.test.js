import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import { Notification } from "./NotificationComponent";

const setUp = (props = {}) => {
  const component = shallow(<Notification {...props} />);
  return component;
};

describe("<Notification />", () => {
  let component;
  beforeEach(() => {
    const props = {
      notification: {}
    };
    component = setUp(props);
  });

  it("It should render without crashing", () => {
    expect(component.length).to.equal(1);
  });
});
