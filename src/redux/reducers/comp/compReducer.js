const compReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_COMP":
      const comp = state.comp.concat(action.payload);
      return { ...state, comp };
  
    default:
      return state;
  }
};

export default compReducer;
