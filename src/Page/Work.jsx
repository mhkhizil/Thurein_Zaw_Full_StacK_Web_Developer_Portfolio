import React,{useState,useEffect} from 'react'
import Loader from './Loader';
import {motion} from "framer-motion"
import icon from '../../Img/Home/icon.svg'

const Work = () => {
    const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      console.log("loader");
    }, 1000);
  }, []);
  return (
      <>
      {loader && <Loader/>}

      <div className="xl:container xl:mx-auto h-auto lg:min-h-screen px-[1rem] md:px-[2rem]  xl:px-[4.5rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className=' grid grid-cols-1 md:mt-20 md:grid-cols-3 gap-5 pt-8  items-center justify-center'>
            <div className=' grid gap-5 col-span-1'>
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
              className=' bg-card-bg box p-4 pb-6.5 rounded-4xl'>
                  <img className='rounded-4xl mb-4' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg" alt="" />
                  <div className=' flex items-center justify-between '>
                    <div className=''>
                      <p className='  text-xs uppercase mb-0 text-card-para opacity-50'>Web designing</p>
                      <h6 className='  text-card-para font-medium text-lg'>Shop App</h6>
                    </div>
                    <a href='https://show-now.vercel.app/' className='transition duration-300 text-card-para linkicon opacity-20'>
                      <img src={icon} alt="" className=''/>
                    </a>
                  </div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
              className='  bg-card-bg box p-4 pb-6.5 rounded-4xl'>
                  <img className='rounded-4xl mb-4' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project2.jpeg" alt="" />
                  <div className=' flex items-center justify-between '>
                    <div className=''>
                      <p className='  text-xs uppercase mb-0 text-card-para opacity-50'>Web designing</p>
                      <h6 className='  text-card-para font-medium text-lg'>Flow Yak</h6>
                    </div>
                    <a href='https://flowyark.vercel.app/' className='transition duration-300 text-card-para linkicon opacity-20'>
                      <img src={icon} alt="" className=''/>
                    </a>
                  </div>
              </motion.div>
            </div>

            <div className=' col-span-2'>
              <motion.div
               initial={{ scale: 0.7 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{
                 duration: 0.8,
                 delay: loader ? 0.5 : 0,
               }}
              className='  flex justify-center items-center'>
                <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" alt="" />
                <h1 className=' text-white font-extrabold text-3xl md:text-5xl lg:text-6xl uppercase '>All projects</h1>
                <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" alt="" />
              </motion.div>

           <div className=' '>
           <div className=' md:my-6 grid grid-cols-1 md:grid-cols-2 gap-5 item-center '>
              <motion.div 
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className=' bg-card-bg box p-4 pb-6.5 rounded-4xl'>
                  <img className='rounded-4xl mb-4' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg" alt="" />
                  <div className=' flex items-center justify-between '>
                    <div className=''>
                      <p className='  text-xs uppercase mb-0 text-card-para opacity-50'>Web designing</p>
                      <h6 className='  text-card-para font-medium text-lg'>Contact</h6>
                    </div>
                    <a href='https://contact-app-pearl.vercel.app/' className='transition duration-300 text-card-para linkicon opacity-20'>
                      <img src={icon} alt="" className=''/>
                    </a>
                  </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className=' bg-card-bg box p-4 pb-6.5 rounded-4xl'>
                  <img className='rounded-4xl mb-4' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg" alt="" />
                  <div className=' flex items-center justify-between '>
                    <div className=''>
                      <p className='  text-xs uppercase mb-0 text-card-para opacity-50'>Web designing</p>
                      <h6 className='  text-card-para font-medium text-lg'>Panda</h6>
                    </div>
                    <a href='https://pj-2-landing-page-64k2.vercel.app/' className='transition duration-300 text-card-para linkicon opacity-20'>
                      <img src={icon} alt="" className=''/>
                    </a>
                  </div>
              </motion.div>
           </div>
           <div className='  md:my-6 grid grid-cols-1 md:grid-cols-2 gap-5 item-center '>
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className=' bg-card-bg box p-4 pb-6.5 rounded-4xl'>
                  <img className='rounded-4xl mb-4' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg" alt="" />
                  <div className=' flex items-center justify-between '>
                    <div className=''>
                      <p className='  text-xs uppercase mb-0 text-card-para opacity-50'>Web designing</p>
                      <h6 className='  text-card-para font-medium text-lg'>Dashboard</h6>
                    </div>
                    <a href='https://show-now.vercel.app/' className='transition duration-300 text-card-para linkicon opacity-20'>
                      <img src={icon} alt="" className=''/>
                    </a>
                  </div>
              </motion.div>

              <motion.div 
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className=' bg-card-bg box p-4 pb-6.5 rounded-4xl'>
                  <img className='rounded-4xl mb-4' src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg" alt="" />
                  <div className=' flex items-center justify-between '>
                    <div className=''>
                      <p className='  text-xs uppercase mb-0 text-card-para opacity-50'>Web designing</p>
                      <h6 className='  text-card-para font-medium text-lg'>Fylo</h6>
                    </div>
                    <a href='https://fylo-page-pj.netlify.app/' className='transition duration-300 text-card-para linkicon opacity-20'>
                      <img src={icon} alt="" className=''/>
                    </a>
                  </div>
              </motion.div>
           </div>
           </div>
            </div>
        </motion.div>
    </div>
      </>
  )
}

export default Work
