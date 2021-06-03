import swapi from '../apis/swapi';
import { FETCH_FILM, FILMS_ERROR } from '../reducers/filmsReducer';

export const fetchFilm = id => async dispatch => {
  try {
    const { data } = await swapi.get(`/films/${id}`);

    dispatch({
      type: FETCH_FILM,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FILMS_ERROR,
      payload: err.message,
    });
  }
};
