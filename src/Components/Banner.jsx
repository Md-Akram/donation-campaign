import React from 'react'

export const Banner = () => {
    return (
        <div className="hero min-h-[80vh] bg-overlay-image" >
            <div className="hero-overlay bg-opacity-90 bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" flex flex-col justify-center items-center">
                    <h1 className="mb-5 text-4xl text-black font-bold">I Grow By Helping People In Need</h1>
                    <div className="form-control">
                        <div className=" flex flex-row ">
                            <input type="text" placeholder="Search…" className="input input-bordered rounded-l-md rounded-r-none" />
                            <button className="btn btn-square min-w-fit px-3 bg-red-500 text-white rounded-none rounded-r-md">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
