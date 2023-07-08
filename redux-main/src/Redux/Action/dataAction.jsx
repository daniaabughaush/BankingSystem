import axios from 'axios';
 
// Action Types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action Creators
export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  };
};

// Thunk function to fetch data
export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest()); // Dispatch the request action

    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=f7c60082eff916bf6b71057813e68f3c&primary_release_year=2023') 
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data)); // Dispatch the success action with the fetched data
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message)); // Dispatch the failure action with the error message
      });
  };
};
