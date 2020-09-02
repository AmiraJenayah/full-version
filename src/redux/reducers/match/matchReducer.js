
const matchReducer = (state = {}, action) => {
  switch (action.type) {
    /* case "LIST_USERS":
      return { ...state, users: action.payload };
    case "SET_USER":
      return { ...state, userId: action.payload }; */

    case "ADD_METCH":
      const matchs = state.matchs.concat(action.payload);
      return { ...state, matchs };
    default:
      return state;
  }
};

export default matchReducer;
