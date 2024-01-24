import React, { useEffect, useState } from 'react'
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/top_rated',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmM0NzIxMzcwZTgxY2ZkYjViM2QxZjNhN2RiMjBjNCIsInN1YiI6IjY1YWYzODdiMzk3NTYxMDBjYjIyODc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lIFbq7V7AE9486Ad_TeJ2xhm6Wo0MvGkcB-0iFeVV8E'
  }
};

const Top = () => {
  const [top, setTop] = useState([])

  useEffect(() => {
    axios.request(options).then(function (response) {
        setTop(response.data.results)
      }).catch(function (error) {
        console.error(error);
      });
  }, [])
  return (
    <div className=''>
        <h1 className='text-2xl font-semibold text-white my-5'>Top Rated</h1>
        <div className="carousel justify-center carousel-center w-full h-60 p-4 space-x-2 rounded-box">
            {top.map((movie) => (
                <div key={movie.id} className="carousel-item">
                    <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} className="rounded-box" />
                </div> 
            ))}
        </div>
    </div>
  )
}

export default Top