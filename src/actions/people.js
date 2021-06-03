import swapi from '../apis/swapi';
import { FETCH_PEOPLE, PEOPLE_ERROR } from '../reducers/peopleReducer';

export const fetchPeople = () => async dispatch => {
  try {
    const { data } = await swapi.get('/people');

    dispatch({
      type: FETCH_PEOPLE,
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: PEOPLE_ERROR,
      payload: err.message,
    });
  }
};
