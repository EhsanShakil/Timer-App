import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TimerButton from "./TimerButton";

configure({ adapter: new Adapter() });

let container = shallow(
  <TimerButton buttonAction={jest.fn()} buttonValue={""} />
);

describe("Timer Button", () => {
  it("Should render a <div/>", () => {
    expect(container.find("div").length).toEqual(1);
  });
  it("invokes Start when the start button is clicked", () => {
    const mockFunction = jest.fn();
    const test = shallow(<TimerButton buttonAction={mockFunction("Start")} />);
    test.find("div").simulate("click");
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  it("invokes Stop when the stop button is clicked", () => {
    const mockFunction = jest.fn();
    const test = shallow(<TimerButton buttonAction={mockFunction("Stop")} />);
    test.find("div").simulate("click");
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  it("invokes Reset when the reset button is clicked", () => {
    const mockFunction = jest.fn();
    const test = shallow(<TimerButton buttonAction={mockFunction("Reset")} />);
    test.find("div").simulate("click");
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
