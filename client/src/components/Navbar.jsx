import React from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
const {user,setShowLogin,logout,credit} = useContext(AppContext)
   
    const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>
      <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
    </Link>

    <div>
        {
        user ? 
        <div className='flex items-center gap-2 sm:gap-3'>
            <button  onClick={()=>navigate('/buy')}className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                <img className='w-5' src={assets.credit_star} alt="" />
                <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left : {credit}</p>
            </button>
            <div className='flex items-center gap-2'>
              <p className='text-gray-600 text-sm sm:text-base'>Hi, {user.name}</p>
              <div className='relative group'>
                <img 
                  src={assets.profile_icon} 
                  className='w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover drop-shadow-md hover:ring-2 hover:ring-blue-400 transition-all duration-200'
                  alt="Profile" 
                />
                <div className='absolute hidden group-hover:block top-full right-0 z-10 mt-2'>
                  <ul className='list-none bg-white rounded-md border shadow-lg py-1'>
                    <li onClick={logout} className='px-4 py-2 hover:bg-gray-50 cursor-pointer'>Logout</li>
                  </ul>
                </div>
              </div>
            </div>

        </div>
        :
        <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={()=>navigate('/buy')}
            className='cursor-pointer'>pricing</p>
            <button onClick={() =>setShowLogin(true)} className='bg-zinc-800 text-white px-10 py-2 sm:px-2 text-sm rounded-full'>Login</button>
        </div>
      }


    </div>
    </div>
    
  )
}

export default Navbar
