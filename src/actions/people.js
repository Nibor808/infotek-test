import swapi from '../apis/swapi';
import { FETCH_ERROR, FETCH_PEOPLE } from '../reducers/peopleReducer';

export const fetchPeople = () => async dispatch => {
  try {
    const { data } = await swapi.get('/people');

    dispatch({
      type: FETCH_PEOPLE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_ERROR,
      payload: err.message,
    });
  }
};
