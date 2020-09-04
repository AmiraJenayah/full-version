const playerReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      const joueurs = state.joueurs.concat(action.payload);
      return { ...state, joueurs };
    default:
      return state;
  }
};

export default playerReducer;
