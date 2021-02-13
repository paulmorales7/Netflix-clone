import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from '../../requests';
import './Banner.css';

function Banner() {
const [movie, setMovie] = useState([]);

useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
    return (
        <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backdropPosition: "center center",
        }}
        >
           <div className='banner_content'>
           <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
           </div>
        </header>
    )
}

export default Banner
