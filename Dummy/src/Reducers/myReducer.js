const myReducer = (state = { name: "", city: "" }, action) => {
  //write the logic to update store data based on the action object
  if (action.type === "NAME") {
    state = {
      ...state,
      name: action.payload,
    };
  }

  return state;
};

export default myReducer;
