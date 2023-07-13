import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../Img/Home/logo.svg'
import {delay, motion} from 'framer-motion'

const Navbar = () => {
  const [isopen,setIsOpen] = useState(true)
  const {pathname}  = useLocation()
  useEffect(()=>{
    setIsOpen(true)
  },[pathname])

  useEffect(()=>{
        const navbar = document.querySelectorAll('.navbar li')
        navbar.forEach((item)=>{
          const link = item.querySelector('a')
          if(link && link.getAttribute('href') === pathname){
            link.classList.add('active')
          }else{
            link.classList.remove('active')
          }
          
        })
  },[])

  const item = {
    exit:{
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeInOut"
      }
    }
  }
  return (
    
    <header className='bg-black text-base font-sans z-40'>
     <div className='md:container md:mx-auto px-[1rem] md:px-[4.5rem]'>

      <div className='flex justify-between items-center py-3'>
        <Link to={'/'} >
            <img src={logo} alt="" className='z-[9999] relative' />
        </Link>
        <div onClick={()=>setIsOpen(!isopen)} className="menu w-8 h-10 relative md:hidden cursor-pointer z-[9999]">
          <span className={'absolute w-full h-0.5 top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-13px] rounded-md transition-transform duration-300' + (!isopen &&' translate-x-[-50%] translate-y-[50%] rotate-[-45deg]')}></span>
          <span className={'absolute w-full h-0.5 top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] rounded-md transition-transform duration-300' + (!isopen && ' !w-0')}></span>
          <span className={'absolute w-full h-0.5 top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[10px] rounded-md transition-transform duration-300' + (!isopen && ' translate-x-[-50%] translate-y-[50%] rotate-[45deg]')}></span>
        </div>
        <motion.div
         
          className={  'navbar hidden md:flex flex-wrap relative items-center bg-none text-gray justify-between'  }>
          <ul className={'flex gap-12 text-gray ' + (!isopen && ' flex-col text-center')}>
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
        </motion.div>

        <motion.div
        initial={{y:'-100%'}}
        animate={!isopen ? { y: 0 } : {y:'-100%'}}
        transition={{
          duration:.4
        }}

         
          className={`fixed w-screen z-[999] top-0 left-0 bg-black`}>
          <ul className={'md:hidden md:opacity-0 md:z-[-999] flex flex-col items-center justify-center gap-4 pt-20 pb-6 text-gray '}>
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
        </motion.div>

        <Link to={'contact'} className='text-white hidden md:block px-7 py-2 rounded-xl font-medium bg-gray-dark'>
          Let's talk
        </Link>
      </div>
     </div>
    </header>
  )
}

export default Navbar