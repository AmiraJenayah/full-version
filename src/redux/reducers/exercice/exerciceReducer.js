const exerciceReducer= (state = {}, action) => {
  switch (action.type) {
    case "ADD_EXERCICE":
      const exercices = state.exercices.concat(action.payload);
      return { ...state, exercices };
    default:
      return state;
  }
};

export default exerciceReducer;
