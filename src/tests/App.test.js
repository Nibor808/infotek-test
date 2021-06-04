import { render, screen } from './test-utils';
import App from '../components/App';
import People from '../components/People';
import Films from '../components/Films';

const INITIAL_STATE = {
  people: {
    allPeople: [],
  },
  films: {
    allFilms: [],
    character: {},
  },
};

const STATE_WITH_VALUES = {
  people: {
    allPeople: [
      {
        name: 'Luke Skywalker',
      },
    ],
  },
  films: {
    allFilms: [
      {
        title: 'A New Hope',
      },
    ],
    character: { name: 'Luke Skywalker', films: [] },
  },
};

test('renders title', () => {
  render(<App />, { initialState: INITIAL_STATE });
  const title = screen.getByTestId('app-title');
  expect(title).toBeInTheDocument();
});

test('renders ProgressBar in People when there is no character', () => {
  render(<People />, { initialState: INITIAL_STATE });
  const title = screen.getByTestId('progress-bar');
  expect(title).toBeInTheDocument();
});

test('renders People', () => {
  render(<People />, { initialState: STATE_WITH_VALUES });
  const title = screen.getByTestId('character-div');
  expect(title).toBeInTheDocument();
});

test('renders ProgressBar in Films when there is a character but not yet any films', () => {
  render(<Films />, {
    initialState: {
      ...INITIAL_STATE,
      films: {
        allFilms: [],
        character: { name: 'Luke Skywalker ', films: [] },
      },
    },
  });
  const title = screen.getByTestId('progress-bar');
  expect(title).toBeInTheDocument();
});

test('renders Films', () => {
  render(<Films />, {
    initialState: STATE_WITH_VALUES,
  });
  const title = screen.getByTestId('film-div');
  expect(title).toBeInTheDocument();
});
