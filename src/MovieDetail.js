import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { API_KEY } from './requests';
import './MovieDetail.css'



function MovieDetail() {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`

  useEffect(() => {
    async function fetchData(id) {
      const request = await axios.get(url);
      setMovie(request.data);
      return request;
    }
    if (id) {
      fetchData(id);
    }
  }, [id])

  console.log(movie);
  return (
    <div className="movieDetail">
      <Link to="/" className="donkey">
        Back
      </Link>
      <h1>{movie?.title}</h1>
    </div>
  )
}

export default MovieDetail
