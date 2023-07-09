import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../Img/Home/logo.svg'


const Navbar = () => {
  const location  = useLocation()
  useEffect(()=>{
        const navbar = document.querySelectorAll('.navbar li')
        navbar.forEach((item)=>{
          const link = item.querySelector('a')
          if(link && link.getAttribute('href') === location.pathname){
            // console.log(link);
            link.classList.add('active')
          }else{
            link.classList.remove('active')
          }

        })
  },[])
  return (
    <header className='bg-black text-base font-sans z-40'>
     <div className='container mx-auto  px-[4.5rem]'>

      <div className='flex justify-between items-center py-3'>
        <Link to={'/'} >
            <img src={logo} alt="" />
        </Link>
        <nav className='navbar flex flex-wrap relative items-center justify-between'>
          <ul className='flex gap-12 font-base text-gray'>
            <li className=''>
              <NavLink to={'/'} aria-current="page" className="transition duration-300">Home</NavLink>
            </li>
            <li>
              <NavLink to={'about'} className="transition duration-300">About</NavLink>
            </li>
            <li>
              <NavLink to={'work'} className="transition duration-300">Work</NavLink>
            </li>
            <li>
              <NavLink to={'contact'} className="transition duration-300">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <Link to={'contact'} className='text-white px-7 py-2 rounded-xl font-medium bg-gray-dark'>
          Let's talk
        </Link>
      </div>
     </div>
    </header>
  )
}

export default Navbar