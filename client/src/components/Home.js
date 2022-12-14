import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center p-10 bg-center bg-cover background items-center">
            <h1 className="text-5xl mb-10 font-semibold font-poppins tracking-wider text-center">JOIN BEST YOGA CLASSES</h1>
            <Link to='/register'>
                <p className='text-3xl bg-gray-900 text-white py-5 px-10 rounded-full hover:-translate-y-2 transition-all duration-200 '>Get Started</p>
            </Link>
        </div>
    )
}

export default Home