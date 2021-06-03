export const FETCH_FILM = 'FETCH_FILM';
export const CLEAR_FILMS = 'CLEAR_FILMS';
export const FILMS_ERROR = 'FILMS_ERROR';

const INITIAL_STATE = {
  allFilms: [],
  filmsError: '',
};

const filmsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FILM:
      const currentFilms = state.allFilms;

      return { ...state, allFilms: [...currentFilms, action.payload] };
    case FILMS_ERROR:
      return { ...state, filmsError: action.payload };
    case CLEAR_FILMS:
      return { ...state, allFilms: [] };
    default:
      return state;
  }
};

export default filmsReducer;
