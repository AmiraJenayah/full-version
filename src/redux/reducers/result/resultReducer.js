const resultReducer = (state = {}, action) => {
    
  switch (action.type) {
    case "ADD_RESULT":
      const matchs = state.matchs.concat(action.payload);
      return { ...state, matchs };
    default:
      return state;
  }
};

export default resultReducer;
