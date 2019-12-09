export let wrapper;

export const setWrapper = componantToBeWrapped => {
  wrapper = componantToBeWrapped;
};

export const findElement = identifier => {
  return wrapper.find(identifier).get(0).props.children;
};
