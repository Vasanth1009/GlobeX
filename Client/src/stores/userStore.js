import axios from '../helpers/http-client';
import ActionTypes from './types';

const url = '/user';
export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    if (data.success) {
      dispatch({
        type: ActionTypes.GET_USER,
        payload: data.user,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post(url, user);
    if (data.success) {
      dispatch({ type: ActionTypes.ADD_USER, payload: data.user });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const emptyUser = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.EMPTY_USER, payload: null });
  } catch (error) {
    console.log(error.message);
  }
};

const userReducer = (user = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USER:
      return payload;
    case ActionTypes.ADD_USER:
      return payload;
    case ActionTypes.EMPTY_USER:
      return payload;
    default:
      return user;
  }
};

export default userReducer;
