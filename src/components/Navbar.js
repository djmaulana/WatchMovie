import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-20">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">WatchMovie</a>
        </div>
        <div className="flex-none gap-2">
            <div className="form-control">
                <input type="text" placeholder="Search Movie" className="input input-bordered w-24 md:w-auto" />
            </div>
        </div>
    </div>
  )
}

export default Navbar