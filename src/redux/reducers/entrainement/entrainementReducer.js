
const entrainementReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ENTRAINEMENT":
      const entrainement = state.entrainement.concat(action.payload);
      return { ...state, entrainement };

    default:
      return state;
  }
};

export default entrainementReducer;
