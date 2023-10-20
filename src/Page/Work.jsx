import React,{useState,useEffect} from 'react'
import Loader from './Loader';
import {motion} from "framer-motion"
import icon from '../../Img/Home/icon.svg'
import webpic  from '../../Img/Work/web1.png'
import webpic2 from '../../Img/Work/web2.png'
import web3 from '../../Img/Work/web3.png'
import bookmark from '../../Img/bookmark.jpg'
import panda from '../../Img/panda.png'
import { Link } from 'react-router-dom';

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

      <div className="xl:container xl:mx-auto h-auto lg:min-h-screen mt-20 md:mt-0 px-[1rem] md:px-[2rem]  xl:px-[4.5rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className=' grid grid-cols-1 md:mt-20 md:grid-cols-3 gap-5  items-center justify-center'>
            <div className='   grid gap-5 col-span-1'>
              <Link to={'https://web-point-of-sale.vercel.app/login'} target='__blank'>
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  // duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
              className=' bg-card-bg box p-4 pb-6.5 rounded-4xl'>
                  <img className=' h-[380px] rounded-4xl mb-4' src={webpic} alt="" />
                  <div className=' flex items-center justify-between '>
                    <div className=''>
                      <p className='  text-xs uppercase mb-0 text-card-para opacity-50'>Web App</p>
                      <h6 className='  text-card-para font-medium text-lg'>Point Of Sale Web App</h6>
                    </div>
                    <span className='transition duration-300 text-card-para linkicon opacity-20'>
                      <img src={icon} alt="" className=''/>
                    </span>
                  </div>
              </motion.div>
              </Link>

              <Link to={'https://velzon-ten.vercel.app/'} target='__blank'>
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  // duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
              className='  bg-card-bg box p-4 pb-6.5 rounded-4xl'>
                  <img className='   h-[390px] rounded-4xl mb-4' src={webpic2} alt="" />
                  <div className=' flex items-center justify-between '>
                    <div className=''>
                      <p className='  text-xs uppercase mb-0 text-card-para opacity-50'>Web designing</p>
                      <h6 className='  text-card-para font-medium text-lg'>Velzon Dashboard</h6>
                    </div>
                    <span className='transition duration-300 text-card-para linkicon opacity-20'>
                      <img src={icon} alt="" className=''/>
                    </span>
                  </div>
              </motion.div>
              </Link>
            </div>

            <div className=' grid gap-5 col-span-2'>
              <motion.div
               initial={{ scale: 0.7 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{
                //  duration: 0.8,
                 delay: loader ? 0.5 : 0,
               }}
              className='  flex justify-center items-center'>
                <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" alt="" />
                <h1 className=' text-white font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl uppercase '>Example projects</h1>
                <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" alt="" />
              </motion.div>

           <div className=' grid gap-5'>
           <div className=' md:my-4 grid grid-cols-1 md:grid-cols-2 gap-5 item-center '>
            <Link to={'https://steady-zabaione-1ab1f6.netlify.app'} target='__blank'>
            <motion.div 
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  // duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className=' bg-card-bg box p-4 pb-6.5 rounded-4xl'>
                  <img className='rounded-4xl mb-4 h-[300px]' src="https://i.pinimg.com/564x/66/a5/0b/66a50b136a2a5435a86937b4e91f77dd.jpg" alt="" />
                  <div className=' flex items-center justify-between '>
                    <div className=''>
                      <p className='  text-xs uppercase mb-0 text-card-para opacity-50'>Web designing</p>
                      <h6 className='  text-card-para font-medium text-lg'>Contact website</h6>
                    </div>
                    <span className='transition duration-300 text-card-para linkicon opacity-20'>
                      <img src={icon} alt="" className=''/>
                    </span>
                  </div>
              </motion.div>
            </Link>

             <div>
              <Link to={'https://pj-2-landing-page-64k2.vercel.app/'} target='__blank'>
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  // duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className=' bg-card-bg box p-4 pb-6.5 rounded-4xl'>
                  <img className='rounded-4xl mb-4 h-[300px] ' src={panda} alt="" />
                  <div className=' flex items-center justify-between '>
                    <div className=''>
                      <p className='  text-xs uppercase mb-0 text-card-para opacity-50'>Web designing</p>
                      <h6 className='  text-card-para font-medium text-lg'>Metaverse clone website</h6>
                    </div>
                    <span className='transition duration-300 text-card-para linkicon opacity-20'>
                      <img src={icon} alt="" className=''/>
                    </span>
                  </div>
              </motion.div>
              </Link>
             </div>
           </div>
           <div className='  grid grid-cols-1 md:grid-cols-2 gap-5 items-start '>
           <Link to={'https://zippy-squirrel-cedee2.netlify.app/'} target='__blank'>
           <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  // duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className=' bg-card-bg box p-4 pb-6.5 rounded-4xl'>
                  <img className='rounded-4xl mb-4 h-[300px]' src={web3} alt="" />
                  <div className=' flex items-center justify-between '>
                    <div className=''>
                      <p className='  text-xs uppercase mb-0 text-card-para opacity-50'>Non Responsive Web designing</p>
                      <h6 className='  text-card-para font-medium text-lg'>University Club Website</h6>
                    </div>
                    <span className='transition duration-300 text-card-para linkicon opacity-20'>
                      <img src={icon} alt="" className=''/>
                    </span>
                  </div>
              </motion.div>
           </Link>

             <Link to={'https://bookmark-page-pj.netlify.app/'} target='__blank'>
             <motion.div 
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  // duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className=' bg-card-bg box p-4 pb-6.5 rounded-4xl'>
                  <img className='rounded-4xl mb-4 h-[300px]' src={bookmark} alt="" />
                  <div className=' flex items-center justify-between '>
                    <div className=''>
                      <p className='  text-xs uppercase mb-0 text-card-para opacity-50'>Web designing</p>
                      <h6 className='  text-card-para font-medium text-lg'>Fylo</h6>
                    </div>
                    <span className='transition duration-300 text-card-para linkicon opacity-20'>
                      <img src={icon} alt="" className=''/>
                    </span>
                  </div>
              </motion.div>
             </Link>
           </div>
           </div>
            </div>
        </motion.div>
    </div>
      </>
  )
}

export default Work
