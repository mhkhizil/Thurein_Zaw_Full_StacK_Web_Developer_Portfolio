import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {delay, motion} from 'framer-motion'
import {LiaHandPointerSolid} from "react-icons/lia"

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
    
    <header className='bg-black text-white text-base font-sans z-40'>
     <div className='md:container md:mx-auto px-[1rem] md:px-[4.5rem]'>

      <div className='flex justify-between items-center py-3'>
        <Link to={'/'} className='hover:text-danger relative' >
            <h1 className='font-semibold'>It's {" "} <span className='font-light'>Me</span></h1>
            <LiaHandPointerSolid className=' transform translate-y-7 rotate-[-20deg] text-danger absolute top-[-5px] right-0 '/>
        </Link>
        <div onClick={()=>setIsOpen(!isopen)} className="menu w-7 h-10 relative md:hidden cursor-pointer z-[9999]">
          <span className={'absolute w-full h-0.5 top-[50%] left-[50%] bg-gray translate-x-[-50%] translate-y-[-13px] rounded-md transition-transform duration-300' + (!isopen &&' translate-x-[-50%] translate-y-[50%] rotate-[-45deg]')}></span>
          <span className={'absolute w-full h-0.5 top-[50%] left-[50%] bg-gray translate-x-[-50%] translate-y-[-50%] rounded-md transition-transform duration-300' + (!isopen && ' !w-0')}></span>
          <span className={'absolute w-full h-0.5 top-[50%] left-[50%] bg-gray translate-x-[-50%] translate-y-[10px] rounded-md transition-transform duration-300' + (!isopen && ' translate-x-[-50%] translate-y-[50%] rotate-[45deg]')}></span>
        </div>
        <motion.div
         
          className={  'navbar hidden md:flex flex-wrap relative items-center bg-none text-gray justify-between'  }>
          <ul className={'flex gap-5 text-gray ' + (!isopen && ' flex-col text-center')}>
            <li className=''>
              <NavLink to={'/'} aria-current="page" className="transition duration-300 px-4 py-2">Home</NavLink>
            </li>
            <li>
              <NavLink to={'about'} className="transition duration-300 px-4 py-2">About</NavLink>
            </li>
            <li>
              <NavLink to={'work'} className="transition duration-300 px-4 py-2">Work</NavLink>
            </li>
            <li>
              <NavLink to={'contact'} className="transition duration-300 px-4 py-2">Contact</NavLink>
            </li>
          </ul>
        </motion.div>

        <motion.div
        initial={{y:'-100%'}}
        animate={!isopen ? { y: 0 } : {y:'-100%'}}
        transition={{
          duration:.4
        }}

         
          className={`navbar fixed w-screen z-[999] top-0 left-0 bg-white`}>
          <ul className={'md:hidden md:opacity-0 md:z-[-999] flex flex-col items-center justify-center gap-4 pt-20 pb-6 text-gray '}>
            <li className=''>
              <NavLink to={'/'} aria-current="page" className="transition duration-300 px-4 py-2">Home</NavLink>
            </li>
            <li>
              <NavLink to={'about'} className="transition duration-300 px-4 py-2">About</NavLink>
            </li>
            <li>
              <NavLink to={'work'} className="transition duration-300 px-4 py-2">Work</NavLink>
            </li>
            <li>
              <NavLink to={'contact'} className="transition duration-300 px-4 py-2">Contact</NavLink>
            </li>
          </ul>
        </motion.div>

        <Link to={'contact'} className='text-white chat transition duration-300 hidden md:flex px-7 py-2 rounded-xl relative font-light bg-danger'>
          Let's Chat
        </Link>
      </div>
     </div>
    </header>
  )
}

export default Navbar