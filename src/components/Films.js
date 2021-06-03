import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilm } from '../actions/films';
import { CLEAR_FILMS } from '../reducers/filmsReducer';
import ProgressBar from './ProgressBar';

const Films = ({ character }) => {
  const dispatch = useDispatch();
  const [filmIds, setFilmIds] = useState([]);
  const error = useSelector(state => state.films.filmsError);
  const result = useSelector(state => state.films.allFilms);
  result?.sort(
    (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)
  );

  useEffect(() => {
    const ids = character.films.map(filmUrl => {
      return filmUrl.substring(filmUrl.length - 2, filmUrl.length - 1);
    });

    setFilmIds(ids);

    dispatch({ type: CLEAR_FILMS });
  }, [dispatch, character]);

  useEffect(() => {
    filmIds.forEach(id => dispatch(fetchFilm(id)));
  }, [filmIds, dispatch]);

  const renderList = () => {
    const lastMovie = result[result.length - 1];

    return (
      <div className='film-div' data-testid='film-div'>
        {error ? <div className='error'>{error}</div> : null}

        <div className='film-list'>
          <p>List of Movies:</p>
          <ul>
            {result.map((film, index) => {
              return <li key={index}>{film.title}</li>;
            })}
          </ul>
        </div>

        <div className='last-appearance'>
          <p>Name/Year Last movie</p>
          <p>
            {lastMovie.title} - {lastMovie.release_date}
          </p>
        </div>
      </div>
    );
  };

  return result.length ? (
    renderList()
  ) : (
    <ProgressBar text='Loading Movies' type='bg-success' />
  );
};

export default Films;
