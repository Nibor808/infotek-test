import peopleReducer, {
  FETCH_PEOPLE,
  PEOPLE_ERROR,
} from '../reducers/peopleReducer';
import filmsReducer, {
  FETCH_FILM,
  FILMS_ERROR,
} from '../reducers/filmsReducer';

const PEOPLE_INITIAL_STATE = {
  allPeople: [],
  peopleError: '',
};

const FILMS_INITIAL_STATE = {
  allFilms: [],
  filmsError: '',
};

test('peopleReducer should return the initial state', () => {
  expect(peopleReducer(PEOPLE_INITIAL_STATE, {})).toEqual(PEOPLE_INITIAL_STATE);
});

test('peopleReducer should update allPeople whe FETCH_PEOPLE is dispatched', () => {
  const action = {
    type: FETCH_PEOPLE,
    payload: [{ name: 'Luke Skywalker' }],
  };

  expect(peopleReducer(PEOPLE_INITIAL_STATE, action)).toEqual({
    allPeople: [{ name: 'Luke Skywalker' }],
    peopleError: '',
  });
});

test('peopleReducer should update peopleError when PEOPLE_ERROR is dispatched', () => {
  const action = {
    type: PEOPLE_ERROR,
    payload: 'There has been an error fetching people',
  };

  expect(peopleReducer(PEOPLE_INITIAL_STATE, action)).toEqual({
    allPeople: [],
    peopleError: 'There has been an error fetching people',
  });
});

test('filmsReducer should return the initial state', () => {
  expect(filmsReducer(FILMS_INITIAL_STATE, {})).toEqual(FILMS_INITIAL_STATE);
});

test('filmsReducer should update allFilms whe FETCH_FILM is dispatched', () => {
  const action = {
    type: FETCH_FILM,
    payload: { title: 'A New Hope' },
  };

  expect(filmsReducer(FILMS_INITIAL_STATE, action)).toEqual({
    allFilms: [{ title: 'A New Hope' }],
    filmsError: '',
  });
});

test('filmsReducer should update filmsError when FILMS_ERROR is dispatched', () => {
  const action = {
    type: FILMS_ERROR,
    payload: 'There has been an error fetching films',
  };

  expect(filmsReducer(FILMS_INITIAL_STATE, action)).toEqual({
    allFilms: [],
    filmsError: 'There has been an error fetching films',
  });
});
