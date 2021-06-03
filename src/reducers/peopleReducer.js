export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_ERROR = 'FETCH_ERROR';

const INITIAL_STATE = {
  people: [],
  fetchError: '',
};

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return { ...state, people: action.payload };
    case FETCH_ERROR:
      return { ...state, fetchError: action.payload };
    default:
      return state;
  }
};

export default peopleReducer;
