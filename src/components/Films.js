import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilm } from '../actions/films';
import ProgressBar from './ProgressBar';

const Films = () => {
  const dispatch = useDispatch();
  const [filmIds, setFilmIds] = useState([]);
  const character = useSelector(state => state.films.character);
  const error = useSelector(state => state.films.filmsError);
  const result = useSelector(state => state.films.allFilms);
  result?.sort(
    (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)
  );

  useEffect(() => {
    if (Object.keys(character).length) {
      const ids = character.films.map(filmUrl => {
        return filmUrl.substring(filmUrl.length - 2, filmUrl.length - 1);
      });

      setFilmIds(ids);
    }
  }, [dispatch, character]);

  useEffect(() => {
    filmIds.forEach(id => dispatch(fetchFilm(id)));
  }, [filmIds, dispatch]);

  const renderList = () => {
    const lastMovie = result[result.length - 1];

    return (
      <div className='film-div' data-testid='film-div'>
        {error ? <div className='error'>{error}</div> : null}

        <p>List of Movies for {character.name}:</p>
        <ul className='film-list'>
          {result.map((film, index) => {
            return <li key={index}>{film.title}</li>;
          })}
        </ul>

        <div className='last-appearance'>
          <p>
            The character {character.name} last appeared in {lastMovie.title}{' '}
            released {lastMovie.release_date}
          </p>
        </div>
      </div>
    );
  };

  if (result.length) return renderList();
  else if (Object.keys(character).length)
    return <ProgressBar text='Loading Movies' type='bg-success' />;
  else return null;
};

export default Films;
