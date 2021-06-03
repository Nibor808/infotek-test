export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const PEOPLE_ERROR = 'PEOPLE_ERROR';

const INITIAL_STATE = {
  allPeople: [],
  peopleError: '',
};

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return { ...state, allPeople: action.payload };
    case PEOPLE_ERROR:
      return { ...state, peopleError: action.payload };
    default:
      return state;
  }
};

export default peopleReducer;
