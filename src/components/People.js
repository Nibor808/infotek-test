import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHARACTER } from '../reducers/filmsReducer';
import { fetchPeople } from '../actions/people';
import ProgressBar from './ProgressBar';

const People = () => {
  const dispatch = useDispatch();
  const result = useSelector(state => state.people.allPeople);
  const error = useSelector(state => state.people.peopleError);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const renderResults = () => {
    return result.map(person => {
      return (
        <li
          key={person.name}
          className='character'
          onClick={() =>
            dispatch({
              type: CHARACTER,
              payload: person,
            })
          }
        >
          {person.name}
        </li>
      );
    });
  };

  return result.length ? (
    <div className='character-div' data-testid='character-div'>
      {error ? <div className='error'>{error}</div> : null}

      <div className='character-list'>
        <p>Characters:</p>
        <div className='dropdown'>
          <button
            className='btn btn-default dropdown-toggle'
            type='button'
            id='character-btn'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Select
          </button>
          <ul className='dropdown-menu' aria-labelledby='character-btn'>
            {renderResults()}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <ProgressBar text='Loading Characters' type='bg-info' />
  );
};

export default People;
