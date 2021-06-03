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
  const title = screen.getByTestId('people-div');
  expect(title).toBeInTheDocument();
});

test('renders ProgressBar in Films when there are no films', () => {
  render(<Films character={{ name: 'Luke', films: [] }} />);
  const title = screen.getByTestId('progress-bar');
  expect(title).toBeInTheDocument();
});

test('renders Films', () => {
  render(<Films character={{ name: 'Luke', films: [] }} />, {
    initialState: STATE_WITH_VALUES,
  });
  const title = screen.getByTestId('film-div');
  expect(title).toBeInTheDocument();
});
