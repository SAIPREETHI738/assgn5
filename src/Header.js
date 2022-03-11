import React from 'react'
import './index.css'
import {Link} from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <div className='nav'>
    <div className='buttons'>
      <li>
        <Link to='/'className='header'>Home</Link>
        </li>
        <li>
        <Link to='/Students' className='header'>Students</Link> 
        </li>
        <li>
        <Link to='/Contact'className='header'>Contact Us</Link>  
        </li> 
    </div>
    </div>
    </>
  )
}

export default Layout