import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import {ImGithub,ImLinkedin} from 'react-icons/im'
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import {SiFrontendmentor} from 'react-icons/si'
import Loader from "./Loader";

const Contact = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      console.log("loader");
    }, 1000);
  }, []);
  return (
    <>
      {loader && <Loader />}
      <section className="xl:container xl:mx-auto h-auto lg:min-h-screen px-[1rem] lg:px-[2rem]  xl:px-[4.5rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          
          className="grid container grid-cols-1 p-2.5 md:grid-cols-3 gap-5 justify-center mt-20 md:mt-32"
        >
          <div className=" col-span-1 flex flex-col gap-10 bg-black text-white">
            <div className="flex flex-col gap-12">
              <motion.h3
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="text-lg font-normal mb-0"
              >
                CONTACT INFO
              </motion.h3>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{once: true}}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="flex gap-5"
              >
                <div className=" h-16 w-16 flex items-center justify-center text-2xl bg-card-bg rounded-lg  p-4">
                  <AiOutlineMail />
                </div>
                <div className="text-md">
                  <h4 className="opacity-50 text-gray">MAIL US</h4>
                  <p>ennko1898@gmail.com</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{once:true}}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="flex gap-5"
              >
                <div className=" h-16 w-16 flex items-center justify-center text-2xl bg-card-bg rounded-lg  p-4">
                  <BsTelephone />
                </div>
                <div className="text-md">
                  <h4 className="opacity-50 text-gray">CONTACT US</h4>
                  <p>+95 9455811927</p>
                  <p>+95 9978044711</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{once:true}}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="flex gap-5"
              >
                <div className=" h-16 w-16 flex items-center justify-center text-2xl bg-card-bg rounded-lg  p-4">
                  <GoLocation />
                </div>
                <div className="text-md">
                  <h4 className="opacity-50 text-gray">LOCATION</h4>
                  <p>Latha Street, Yangon</p>
                  <p>Myanmar</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{once:true}}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="flex flex-col items-start mb-10 md:mb-0 gap-5"
            >
              <h3 className="text-lg font-normal">SOCIAL INFO</h3>
              <div className=" flex justify-center items-center gap-5 ">
                <a href="https://www.frontendmentor.io/profile/ennko" target='_blank' className='h-16 w-16 rounded-full transition duration-500 bg-card-bg text-white hover:text-black hover:bg-white flex justify-center items-center shadow'>
                  <SiFrontendmentor className="text-2xl "/>
                </a>
                <a href="https://github.com/enn-ko?tab=repositories" target='_blank' className='h-16 w-16 rounded-full transition duration-500 bg-card-bg text-white hover:text-black hover:bg-white flex justify-center items-center shadow'>
                  <ImGithub className="text-2xl "/>
                </a>
                <a href="https://www.linkedin.com/in/ennko/" target='_blank' className='h-16 w-16 rounded-full bg-card-bg text-white hover:text-black hover:bg-white transition duration-500 flex justify-center items-center shadow'>
                  <ImLinkedin className="text-2xl "/>
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{once:true}}
            transition={{
              duration: 0.4,
              delay: loader ? 0.4 : 0,
            }}
            className="relative col-span-2 h-[38rem] md:ml-8 lg:ml-none box bg-card-bg rounded-3xl p-10"
          >
            <img
              className="h-20 absolute top-0 right-10"
              src="Img\Contact\icon2.png"
              alt=""
            />
            <h1 className="text-4xl font-semibold text-light py-5">
              Let's work <span className="text-primary">together.</span>
            </h1>
            <form className="flex flex-col gap-4">
              <input
                className="w-full bg-gray bg-opacity-20 opacity-40 text-white box placeholder-grid-dark rounded-lg p-3 focus:outline-none"
                type="text"
                placeholder="Name *"
              />
              <input
                className="w-full bg-gray bg-opacity-20 opacity-40 box text-white placeholder-grid-dark rounded-lg p-3 focus:outline-none"
                type="text"
                placeholder="Email *"
              />
              <input
                className="w-full bg-gray bg-opacity-20 opacity-40 box text-white placeholder-grid-dark rounded-lg p-3 focus:outline-none"
                type="text"
                placeholder="Your Subject *"
              />
              <textarea
                className="w-full bg-gray bg-opacity-20 opacity-40 box text-white placeholder-grid-dark rounded-lg p-3 focus:outline-none"
                type="text"
                placeholder="Your Message *"
                rows="5"
              />
              <button className="w-full bg-danger bg-opacity-20 opacity-40 text-light hover:bg-light hover:text-danger rounded-lg py-4">
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
