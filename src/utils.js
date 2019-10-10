export const getTimestring = date => `${date.getHours()}:${date.getMinutes()}`;

export const getDatestring = date =>
  `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

export const getBackgroundColor = date => {
  const hours = date.getHours();
  if (hours >= 18 || hours < 6) {
    return "#AD9FC8";
  }
};
