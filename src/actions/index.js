import * as ReviewsService from '../services/Reviews';

export const setHttpLoading = () => {
  return {
    type: 'HTTP_LOADING',
  };
}

export const setHttpLoaded = () => {
  return {
    type: 'HTTP_LOADED',
  };
}

export const setHttpError = (error) => {
  return {
    type: 'HTTP_ERROR',
    error
  };
}

export const setReviews = (reviews) => {
    return {
        type: 'SET_REVIEWS',
        reviews
    };
}

export const fetchReviews = () => {
  return dispatch => {
    dispatch(setHttpLoading());
    dispatch(setReviews([]));
    return ReviewsService.fetchReviews().then(data => {
      dispatch(setHttpLoaded());
      dispatch(setReviews(data));
      return data;
    }, err => {
      dispatch(setHttpError(`error while fetching reviews : ${err.message}`));
    });
  };
}
