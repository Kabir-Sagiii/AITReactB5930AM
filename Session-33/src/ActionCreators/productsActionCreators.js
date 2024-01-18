export const electronicActionCreator = (data) => {
  return {
    type: "electronic",
    payload: data,
  };
};

export const jeweleryActionCreator = (data) => {
  return {
    type: "jewelery",
    payload: data,
  };
};

export const cartActionCreator = (data) => {
  return {
    type: "cart",
    payload: data,
  };
};
