export const getTimestring = date =>
  `${date.getHours()}:${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }`;

export const getDatestring = date =>
  `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
