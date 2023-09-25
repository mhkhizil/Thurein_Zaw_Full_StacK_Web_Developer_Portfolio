import React, { useEffect,useState,useRef } from 'react'
import  me2 from '../../Img/me.jpg'
import bg from '../../Img/About/bg1.png'
import star from '../../Img/About/star-2.png'
import icon from '../../Img/Home/icon.svg'
import icon2 from '../../Img/About/icon2.png'
import sign from '../../Img/About/sign.png'
import {ImGithub,ImLinkedin} from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import Loader from './Loader'
import Typed from 'typed.js'

const About = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      console.log("loader");
    }, 1000);
  }, []);
  const nav = useNavigate()

  const el = useRef(null)

  useEffect(()=>{
    var typed = new Typed(el.current ,{
      strings: ['Thurein Zaw'],
      startDelay: 700,
      typeSpeed: 50,
      backDelay: 700,
      loop: true,
      backSpeed: 50,
      loopCount: Infinity,
      
    });

    return()=>{
      typed.destroy();
    }
  },[])
  return (
   <>
      {loader && <Loader/>}
    
      <section className="about pt-20 m-0 bg-black font-Inter">
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          duration: 0.8,
          delay: 0.5
        }}
        className="xl:container xl:mx-auto min-h-screen px-[1rem] md:px-[2rem]  xl:px-[4.5rem] ">
        <div className="">
          <section className="p-2.5 grid grid-cols-1 lg:grid-cols-3 gap-5 items-start xl:gap-10">
            <motion.div 
              initial={{scale: 0.7}}
              whileInView={{scale: 1}}
              viewport={{once: true}}
              transition={{
                // duration: 0.8,
                delay: loader ? 0.3 : 0,
              }}
            className="mx-auto sm:w-1/3 md:w-1/2 lg:w-full ">
              <div className='box relative p-6 rounded-4xl  bg-card-bg z-10'>
                <img src={bg} alt="background image" className='absolute top-0 left-0 object-cover h-full w-full opacity-10'/>
                <div className="h-full rounded-4xl">
                  <img src={me2}  id='admin' className='h-full rounded-4xl' alt="My profile" />
                </div>
              </div>
            </motion.div>

            <div className=" col-span-1 md:col-span-2 mt-10 lg:mt-0">
              <motion.div 
                initial={{scale : 0.7}}
                whileInView={{scale: 1}}
                viewport={{once : true}}
                transition={{
                  // duration: 0.8,
                  delay: loader ? 0.3 : 0,
                }}
              >
              <h1 className='mb-10 lg:mb-4 text-3xl md:text-5xl xl:text-7xl uppercase font-medium flex items-center justify-center gap-1.5 text-white  '>
                <img src={star} alt="" className="w-6 xl:w-16" aria-hidden="true" /> {" "}
                self-summery 
                <img src={star} alt="" className='w-6 xl:w-16' aria-hidden="true" />
              </h1>
              </motion.div>
              <motion.div 
               initial={{ scale: 0.7 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{
                //  duration: 0.8,
                 delay: loader ? 0.5 : 0,
               }}
              className="box pt-20 pr-15 pl-7 pb-7 bg-card-bg relative rounded-4xl">
                <img src={icon2} alt="gridx icon2"  className='absolute top-0'/>
                <h1 className='mb-2 text-4xl font-medium font-Rem italic text-danger'>
                  <span ref={el}></span>
                </h1>
                <p className='text-white opacity-[0.8]'>
                As a React developer, I bring creativity and technical expertise to the world of web development. With a strong foundation in JavaScript and React, I have a proven track record of crafting dynamic and efficient user interfaces. My passion for clean code and attention to detail ensure that the applications I build not only look great but also perform flawlessly across various devices and browsers. I thrive in collaborative environments, leveraging my communication skills to work effectively with cross-functional teams. Whether it's creating interactive user experiences, optimizing performance, or solving complex challenges, I am committed to delivering exceptional solutions that leave a lasting impact.            </p>
              </motion.div>
            </div>
          </section>

          <section className='p-2.5 grid grid-cols-1 md:grid-cols-2 gap-5'>
              <motion.div
                initial={{scale: 0.7}}
                whileInView={{scale: 1}}
                viewport={{once : true}}
                transition={{
                  // duration: 0.8,
                  delay: loader ? 0.5 : 0,
                }}
                className="box p-7 rounded-4xl bg-card-bg">
                <img src={bg} alt="background image" className='absolute top-0 left-0 w-full h-full object-cover opacity-10' />
                <h3 className='mb-8 uppercase text-white font-medium text-base '>Experience</h3>
                <ul className='text-base font-medium'>
                  {/* <li>
                    <p className='text-card-para opacity-60 mb-3'>2018-2019</p>
                    <h2 className='text-lg mb-1.5 text-white opacity-90'>Feild Interviewer</h2>
                    <p className='text-card-para opacity-70 font-normal text-sm '>Kanter TNS</p>
                  </li> */}
                  <li className='pt-8'>
                    <p className='text-card-para opacity-60 mb-3'>2023-Present</p>
                    <h2 className='text-lg mb-1.5 text-white opacity-90'>Front-End Developer</h2>
                    <p className='text-card-para opacity-70 font-normal text-sm'>MMSIT</p>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{scale : 0.7}}
                whileInView={{scale : 1}}
                viewport={{once : true}}
                transition={{
                  // duration: 0.8,
                  delay: loader ? 0.5 : 0
                }}
                className="box p-7 rounded-4xl bg-card-bg">
                <img src={bg} alt="background image" className='absolute top-0 left-0 w-full h-full object-cover opacity-10' />
                <h3 className='mb-8 uppercase text-white font-medium text-base '>Education</h3>
                <ul className='text-base font-medium'>
                  <li>
                    <p className='text-card-para opacity-60 mb-3'>2019-2020</p>
                    <h2 className='text-lg mb-1.5 text-white opacity-90'>High School</h2>
                    <p className='text-card-para opacity-70 font-normal text-sm'>Kaung Htet Kyaw High School</p>
                  </li>
                  <li className='pt-8'>
                    <p className='text-card-para opacity-60 mb-3'>2021</p>
                    <h2 className='text-lg mb-1.5 text-white opacity-90'>Higher National Diploma Foundation</h2>
                    <p className='text-card-para opacity-70 font-normal text-sm'>GUSTO UNIVERSITY</p>
                  </li>
                  <li className='pt-8'>
                    <p className='text-card-para opacity-60 mb-3'>2021-2023</p>
                    <h2 className='text-lg mb-1.5 text-white opacity-90'>Higher National Diploma In Software Engineering</h2>
                    <p className='text-card-para opacity-70 font-normal text-sm'>UNIVERSITY OF SUNDERLAND</p>
                  </li>
                  <li className='pt-8'>
                    <p className='text-card-para opacity-60 mb-3'>2022-2023</p>
                    <h2 className='text-lg mb-1.5 text-white opacity-90'> Diploma In Special Web Desingn</h2>
                    <p className='text-card-para opacity-70 font-normal text-sm'>MMS IT</p>
                  </li>
                </ul>
              </motion.div>
          </section>
          <section className='p-2.5 lg:items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
              <motion.div
                initial={{scale : 0.7}}
                whileInView={{scale:  1}}
                viewport={{once : true}}
                transition={{
                  // duration  : 0.8,
                  delay : loader ? 0.5 : 0
                }}
                onClick={()=>nav('/contact')}
                className=" box bg-card-bg p-5 rounded-4xl ">
                  <img src={bg} alt="background image" className='absolute top-0 left-0 object-cover mb-4 opacity-10' />
                  <div className="box bg-card-bg p-4 mb-4 flex justify-center items-center gap-5 border border-dark rounded-4xl shadow">
                    <a href="https://github.com/mhkhizil" target='_blank' className='h-16 w-16 rounded-full transition duration-500 border text-white hover:text-black hover:bg-white border-dark flex justify-center items-center shadow'>
                      <ImGithub className="text-2xl "/>
                    </a>
                    <a href="https://www.linkedin.com/in/thurein-zaw-62ab73291/" target='_blank' className='h-16 w-16 rounded-full border border-dark text-white hover:text-black hover:bg-white transition duration-500 flex justify-center items-center shadow'>
                      <ImLinkedin className="text-2xl "/>
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className=''>
                      <h4 className=' uppercase text-xs text-card-para opacity-50 mb-3 font-medium'>Stay with me</h4>
                      <h1 className='text-lg font-medium text-white mb-2'>Profile</h1>   
                    </div>
                    <a href="#!" className='transition duration-300 text-card-para linkicon opacity-20'>
                        <img src={icon} alt="" className=''/>
                    </a>
                  </div>
              </motion.div>
              <motion.div
                initial={{scale: 0.7}}
                whileInView={{scale: 1}}
                viewport={{once : true}}
                transition={{
                  // duration: 0.8,
                  delay: loader ? 0.3 : 0
                }}
                onClick={()=>nav('/contact')}
                className="box pt-25 pb-10.5 px-5 col-span-1 lg:col-span-2 bg-card-bg rounded-4xl">
              <img src={bg} alt="background image" className='absolute top-0 w-full left-0 object-cover mb-4 opacity-10' />
              <img src={icon2} alt="" className='absolute top-0' />
              <div className='flex justify-between items-end'>
                <h1 className='font-medium text-white text-3xl lg:text-4xl '>
                    Let's 
                    <br />
                    Work {" "}
                    <span className='text-primary'>together.</span>
                  </h1>

                  <a href="#!" className='transition duration-300 linkicon text-card-para opacity-20 cursor-pointer'>
                    <img src={icon} alt="" />
                  </a>
              </div>
              </motion.div>
              <motion.div 
                initial={{scale : 0.7}}
                whileInView={{scale : 1}}
                viewport={{once : true}}
                transition={{
                  // duration:  0.8,
                  delay: loader ? 0.3 : 0
                }}
                onClick={()=>nav("/credential")}
                className="box p-5 rounded-4xl bg-card-bg md:col-span-3 lg:col-span-1">
              <img src={bg} alt="background image" className='absolute top-0 left-0 w-full object-cover mb-4 opacity-10' />
              <img src={sign} alt="sign image" className='mb-4 object-cover w-[75%] lg:max-w-none px-5' />
              <div className="flex justify-between items-center">
                    <div className=''>
                      <h4 className=' uppercase text-xs text-card-para opacity-50 mb-3 font-medium'>More about me</h4>
                      <h1 className='text-lg font-medium text-white mb-2'>Credentials</h1>   
                    </div>
                    <div>
                    <a href='#!' className='linkicon transition duration-300 text-card-para opacity-20'>
                        <img src={icon} alt="" className=''/>
                    </a>
                    </div>
                  </div>
              </motion.div>
          </section>
        </div>
      </motion.div>
      </section>
      {/* </motion.div> */}
   </>
  )
}

export default About