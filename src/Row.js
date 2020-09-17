import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  const handleClick = (e) => {
    setMovie(e.target.id);
  }

  return (
    <div  className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img
            id={movie.id}
            className="row__poster"
            key={movie.id} 
            src={movie.poster_path ? base_url + movie.poster_path : null} 
            alt={movie.name} 
            onClick={handleClick}
           />
        ))}
      </div>
    </div>
  )
}

export default Row
