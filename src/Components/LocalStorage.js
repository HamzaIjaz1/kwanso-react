
const key="abcd";
export const getData = () => {
  let data = localStorage.getItem(key);
  if (data !== "undefined") {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const setData = (data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
