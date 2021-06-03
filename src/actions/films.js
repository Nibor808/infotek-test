import swapi from '../apis/swapi';
import { CLEAR_FILMS, FETCH_FILM, FILMS_ERROR } from '../reducers/filmsReducer';

export const fetchFilm = id => async dispatch => {
  dispatch({ type: CLEAR_FILMS });

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
