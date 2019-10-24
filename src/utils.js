export const getTimestring = date => `${date.getHours()}:${date.getMinutes()}`;

export const getDatestring = date =>
  `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;