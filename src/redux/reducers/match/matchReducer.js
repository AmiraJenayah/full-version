
const matchReducer = (state = {}, action) => {
  switch (action.type) {
  

    case "ADD_METCH":
      const matchs = state.matchs.concat(action.payload);
      return { ...state, matchs };
    default:
      return state;
  }
};

export default matchReducer;
