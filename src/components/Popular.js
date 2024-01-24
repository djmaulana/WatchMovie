import React, { useEffect, useState } from 'react'
import axios from 'axios'

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmM0NzIxMzcwZTgxY2ZkYjViM2QxZjNhN2RiMjBjNCIsInN1YiI6IjY1YWYzODdiMzk3NTYxMDBjYjIyODc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lIFbq7V7AE9486Ad_TeJ2xhm6Wo0MvGkcB-0iFeVV8E'
    }
  };

const Popular = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.request(options).then(function (response) {
      setMovies(response.data.results)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  return (
    <div>
        <h1 className='text-2xl font-semibold text-white mt-5'>Popular!</h1>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {movies.map((movie) => (
            <div key={movie.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                    src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                    className="h-full w-full object-cover object-center lg:h-fuall lg:w-full" alt=''
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href='#' className="text-left text-gray-200">
                                {movie.title}
                            </a>
                        </h3>
                        <div className='flex flex-row gap-2 mt-1'>
                            <p className="mt-1 text-sm text-gray-500 text-left">
                                {movie.release_date}
                            </p>
                                <button className='bg-primary text-xs text-white rounded-xl px-2 py-1'>
                                    Watch
                                </button>
                                <button className='bg-error text-xs text-white rounded-xl px-2 py-1'>
                                    Trailer
                                </button>
                        </div>
                    </div>
                    <p className="text-sm font-medium text-primary">{movie.vote_average}</p>
                </div>
            </div>
            ))}
        </div>
        <div className="my-10 text-center">
          <button className="rounded-xl py-2 px-4 bg-primary text-white hover:bg-blue-400">Load More</button>
        </div>
    </div>
  )
}

export default Popular