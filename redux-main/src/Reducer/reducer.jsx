import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';


const initialState = {
    loading: true,
    data: [], // Set the initial data value as an empty array
    error: ''
  };
// Action Types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action Creators

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
  });
  
  export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
  });
  
  export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
  });
  

// Thunk function to fetch data
export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest()); // Dispatch the request action

    axios
      .get('https://api.themoviedb.org/3/discover/movie?api_key=f7c60082eff916bf6b71057813e68f3c&primary_release_year=2023')
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data)); // Dispatch the success action with the fetched data

      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message)); // Dispatch the failure action with the error message
      });
  };



};

export const selectLoading = (state) => state.loading;
export const selectError = (state) => state.error;

  
 export  const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export  const store = createStore(dataReducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    const state = store.getState(); // Get the entire state object
    console.log(state.data); // Access the data property from the state object
  
     const movies = state.data;
// {    movies.forEach((movie) => {
//       console.log(movie); // Access individual movie object
//     });}

});

store.dispatch(fetchData());

export default fetchData;
export {movies}