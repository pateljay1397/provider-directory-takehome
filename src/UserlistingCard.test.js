import Userlistingcard from "./components/Userlistingcard";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure, mount } from "enzyme";
import { Router } from "react-router";

configure({ adapter: new Adapter() });

const user = {
  id: "3",
  name: "Francois-Pierre Decoste",
  title: "MSW",
  avatarUrl: "",
  availabilty: "tomorrow",
  location: "Montreal, Quebec",
  education: "McGill",
  languages: ["English", "French"],
  bio:
    "Dynamic and easy to approach, François-Pierre Decoste is a social worker who will help you take control of " +
    "your life. He specializes in issues that affect mood (anxiety, depression, grief, burnout, posttrauma) and " +
    "the quality of your relationships (communication, couple and family issues). His approach promotes better " +
    "self-esteem, techniques to develop assertiveness, and healthy management of emotions.",
};

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("", () => {
  it("accepts user props", () => {
    const wrapper = mount(<Userlistingcard user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });
  it("contains user name", () => {
    const wrapper = mount(<Userlistingcard user={user} />);
    const value = wrapper.find("h5").text();
    expect(value).toEqual("Francois-Pierre Decoste");
  });
});
