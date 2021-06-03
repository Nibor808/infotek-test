import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Films from './Films';
import { CLEAR_FILMS } from '../reducers/filmsReducer';
import { fetchPeople } from '../actions/people';

const People = () => {
  const [character, setCharacter] = useState({});
  const dispatch = useDispatch();
  const result = useSelector(state => state.people.allPeople);
  const error = useSelector(state => state.people.peopleError);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const handleClick = person => {
    setCharacter(person);

    if (person.name !== character.name) {
      dispatch({ type: CLEAR_FILMS });
    }
  };

  const renderResults = () => {
    return result.map(person => {
      return (
        <li key={person.name} onClick={() => handleClick(person)}>
          {person.name}
        </li>
      );
    });
  };

  return result.length ? (
    <div>
      {error ? <div className='error'>{error}</div> : null}

      <div className='character-list'>
        <p>Characters:</p>
        <div className='dropdown'>
          <button
            className='btn btn-default dropdown-toggle'
            type='button'
            id='characters'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Select
          </button>
          <ul className='dropdown-menu' aria-labelledby='characters'>
            {renderResults()}
          </ul>
        </div>
      </div>

      {character ? <Films character={character} /> : null}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default People;
