import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TimerButton from "./TimerButton";

configure({ adapter: new Adapter() });
let props = {
  buttonAction: jest.fn(),
  buttonValue: "",
};

let container = shallow(<TimerButton {...props} />);

describe("Timer Button", () => {
  it("Should render a <div/>", () => {
    expect(container.find("div").length).toEqual(1);
  });
  it("invokes Stop when the stop button is clicked", () => {
    const mockFunction = jest.fn();
    const test = shallow(<TimerButton buttonAction={mockFunction} />);
    test.find("div").simulate("click");
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
