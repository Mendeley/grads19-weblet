export let wrapper;

export const setWrapper = componentToBeWrapped => {
  wrapper = componentToBeWrapped;
};

export const findElement = identifier => {
  return wrapper.find(identifier).get(0).props.children;
};
