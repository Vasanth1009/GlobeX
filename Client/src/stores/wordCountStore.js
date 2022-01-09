import axios from '../helpers/http-client';
import ActionTypes from './types';

const url = '/wordCount';
export const getWordCounts = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    data.wordCounts.reverse();
    if (data.success) {
      dispatch({
        type: ActionTypes.GET_WORDCOUNTS,
        payload: data.wordCounts,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const addWordCount = (wordCount) => async (dispatch) => {
  try {
    const { data } = await axios.post(url, wordCount);
    if (data.success) {
      dispatch({ type: ActionTypes.ADD_WORDCOUNT, payload: data.wordCount });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const updateWordCount = (id, wordCount) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${url}/${id}`, wordCount);
    if (data.success) {
      dispatch({ type: ActionTypes.UPDATE_WORDCOUNT, payload: data.wordCount });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteWordCount = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${url}/${id}`);
    if (data.success) {
      dispatch({ type: ActionTypes.DELETE_WORDCOUNT, payload: id });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const emptyWordCount = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.EMPTY_WORDCOUNTS, payload: [] });
  } catch (error) {
    console.log(error.message);
  }
};

const wordCountReducer = (wordCounts = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_WORDCOUNTS:
      return payload;
    case ActionTypes.ADD_WORDCOUNT:
      return [...wordCounts, payload];
    case ActionTypes.UPDATE_WORDCOUNT:
      return wordCounts.map((wordCount) =>
        wordCount._id === payload._id ? payload : wordCount
      );
    case ActionTypes.DELETE_WORDCOUNT:
      return wordCounts.filter((wordCount) => wordCount._id !== payload);
    case ActionTypes.EMPTY_WORDCOUNTS:
      return payload;
    default:
      return wordCounts;
  }
};

export default wordCountReducer;
