import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("Should render a <div>"),
    () => {
      let container = shallow(<App />);
      expect(container.find("div").length).toEqual(1);
    };
});
