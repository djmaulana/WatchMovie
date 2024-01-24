import React, { useEffect } from 'react'
import axios from 'axios'

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmM0NzIxMzcwZTgxY2ZkYjViM2QxZjNhN2RiMjBjNCIsInN1YiI6IjY1YWYzODdiMzk3NTYxMDBjYjIyODc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lIFbq7V7AE9486Ad_TeJ2xhm6Wo0MvGkcB-0iFeVV8E'
    }
  };

const Movie = () => {
  useEffect(() => {
    axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
  }, [])
  return (
    <div className='w-full mt-5 flex flex-col'>
        <div className='flex flex-col md:flex-row gap-10 justify-center'>
            <div id="item1" className="carousel-item">
                <div className="card card-side bg-base-100 shadow-xls">
                    <figure>
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on WatchFilm app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-white">Watch</button>
                            <button className='btn btn-error text-white'>Trailers</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="item2" className="carousel-item">
                <div className="card card-side bg-base-100 shadow-xls">
                    <figure>
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on WatchFilm app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-white">Watch</button>
                            <button className='btn btn-error text-white'>Trailers</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="flex justify-center w-full py-5 gap-2">
            <a href="#" className="btn btn-xs">1</a> 
            <a href="#" className="btn btn-xs">2</a> 
            <a href="#" className="btn btn-xs">3</a> 
            <a href="#" className="btn btn-xs">4</a>
        </div>
    </div>
  )
}

export default Movie