import React from "react";
import { shallow, configure } from "enzyme";
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
});
