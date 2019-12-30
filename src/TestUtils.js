import { mount } from "enzyme";

export let wrapper;

export const setMountedWrapper = componentToBeWrapped => {
  wrapper = mount(componentToBeWrapped);
};

export const findElement = identifier => {
  return wrapper.find(identifier).get(0).props.children;
};
