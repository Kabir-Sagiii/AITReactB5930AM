var defaultdata = {
  electronics: [],
  jewelery: [],
  mens: [],
  womens: [],
  cart: [],
};

const productReducer = (state = defaultdata, action) => {
  if (action.type === "electronic") {
    state = {
      ...state,
      electronics: action.payload,
    };
  } else if (action.type === "jewelery") {
    state = {
      ...state,
      jewelery: action.payload,
    };
  } else if (action.type === "cart") {
    state = {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }
  return state;
};

export default productReducer;
