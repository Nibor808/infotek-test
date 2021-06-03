import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilm } from '../actions/films';

const Films = ({ character }) => {
  const [filmIds, setFilmIds] = useState([]);
  const dispatch = useDispatch();
  const result = useSelector(state => state.films.allFilms);
  result?.sort(
    (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)
  );
  const error = useSelector(state => state.people.filmsError);

  useEffect(() => {
    if (Object.keys(character).length) {
      const ids = character.films.map(filmUrl => {
        return filmUrl.substring(filmUrl.length - 2, filmUrl.length - 1);
      });
      setFilmIds(ids);
    }
  }, [character]);

  useEffect(() => {
    filmIds.forEach(id => dispatch(fetchFilm(id)));
  }, [filmIds, dispatch]);

  if (result.length && result.length === character.films.length) {
    const lastMovie = result[result.length - 1];

    return (
      <div className='movie-div'>
        {error ? <div className='error'>{error}</div> : null}

        <div className='movie-list'>
          <ul>
            {result.map((film, index) => {
              return <li key={index}>{film.title}</li>;
            })}
          </ul>
        </div>

        <div className='last-appearance'>
          <p>Name/Year last movie</p>
          <p>
            {lastMovie.title} - {lastMovie.release_date}
          </p>
        </div>
      </div>
    );
  } else return null;
};

export default Films;
