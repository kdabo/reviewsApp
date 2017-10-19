export const reviews = (state = [], action) => {
  switch (action.type) {
    case 'SET_REVIEWS':
      return action.reviews;
    default:
      return state;
  }
};
