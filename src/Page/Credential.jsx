import { useEffect, useState } from "react";
import me from "../../Img/me.jpg";
import Loader from "./Loader";
import { motion } from "framer-motion";

import { ImGithub,ImLinkedin } from "react-icons/im";
import {SiFrontendmentor} from "react-icons/si"
import { useNavigate } from "react-router-dom";

const Credential = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  const name = "Enn Ko".split("");
  console.log(name);

  const nav = useNavigate()
  return (
    <>
      {loader && <Loader />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="xl:container xl:mx-auto min-h-screen px-[1rem] md:px-[2rem]  xl:px-[4.5rem]  pb-20 flex flex-col md:flex-row items-start justify-between gap-12 mt-14"
      >
        
        <div className="basis-1/3 bg-card-bg rounded-3xl px-6 py-6 relative mx-auto md:mx-0 md:sticky md:top-[10%]  after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25] z-10">
          <div className="   bg-home-gradient rounded-3xl overflow-hidden z-50">
            <img src={me} className="block  sm:w-full sm:h-full" alt="" />
          </div>
          <div className="text-center py-6">
            <h1 className="text-white text-2xl font-semibold">
              {name.map((letter, i) => (
                <span key={i}>{letter}</span>
              ))}
            </h1>
            <p className="text-card-para opacity-50">ennko1898@gmail.com</p>
          </div>
          <div className="flex items-center justify-center gap-2 pb-6">
            <a href="https://github.com/enn-ko?tab=repositories" target="_blank" className="w-10 h-10 z-50 group duration-150 grid place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  hover:bg-white relative cursor-pointer after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]">
              <ImGithub className="text-white duration-150 group-hover:text-gray text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/ennko/" target="_blank" className="w-10 h-10 grid hover:bg-white group z-50 cursor-pointer duration-150 place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]">
              <ImLinkedin className="text-white text-xl group-hover:text-gray duration-150" />
            </a>
            <a href="https://www.frontendmentor.io/profile/ennko" target="_blank" className="w-10 h-10 grid hover:bg-white group z-50 cursor-pointer duration-150 place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]">
              <SiFrontendmentor className="text-white text-xl group-hover:text-gray duration-150" />
            </a>
          </div>
          <div className=" z-50 relative">
            <button onClick={()=>nav('/contact')} className="w-full py-2 transition rounded-xl bg-danger hover:bg-white cursor-pointer hover:text-danger text-white text-lg leading-normal tracking-wider">
              Contact me
            </button>
          </div>
        </div>

        <div className="basis-2/3">
          <div className="about">
            <h1 className="c uppercase text-white text-xl font-medium">
              about me
            </h1>
            <p className="text-white text-[1.1rem]  leading-normal tracking-wide opacity-80 mt-6 mb-9">
              As a front-end developer experience React projects, actively learning new languages.
            </p>
            <p className="text-white text-[1.1rem] leading-normal tracking-wide opacity-80">
            I'm a dedicated web developer with experience in React projects and Vanilla JavaScript. I'm passion for continuous learning drives my to stay updated with the latest web development trends and technologies. With I expertise in creating dynamic user interfaces and commitment to self-improvement, I'm well-equipped to tackle any challenge that comes my way.
            </p>
          </div>

          <div className="experience mt-10">
            <h1 className="text-white text-xl font-medium">Experience</h1>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">react js developer</h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">"I have hands-on experience in React projects with team collaboration, implementing responsive web designs, and utilizing Git version control. My skills in building dynamic user interfaces and managing code collaboratively make me an asset in developing modern web applications."</p>
          </div>

          <div className="education mt-10">
            <h1 className="text-white text-xl font-medium ">Education</h1>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">Bachelor's Degree in Internation Relations</h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">In this degree I learned understanding of global affairs, diplomacy, and cross-cultural interactions. Throughout the course, students delve into various aspects of international politics, economics, law, and social issues. The curriculum fosters critical thinking, analytical skills, and a broad perspective on global challenges.</p>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">Certificate in special web design Course</h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">In the Special web design course, students also acquire valuable skills in web design patterns, React, API, Tailwind CSS, Bootstrap, Redux Toolkit, and static web design. Additionally, they are introduced to VPS (Virtual Private Server) management and React Native development, enabling them to create mobile applications with React.  Furthermore, students collaborate on a team project utilizing React, enhancing their ability to work collectively and creatively in addressing real-world challenges.</p>
          </div>

          <div className="skills mt-10">
          <h1 className="c uppercase text-white text-xl font-medium">
              skills
            </h1>
            <div className="flex items-center justify-between flex-wrap gap-y-6 mt-8">
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal uppercase">html</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal uppercase">css</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal uppercase">javascript</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal uppercase">react</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal uppercase">tailwind</h4>
                </div>
                <div className="basis-1/2">
                    <span className="text-white opacity-40">85%</span>
                    <h4 className="text-white text-lg font-normal uppercase">bootstrap</h4>
                </div>
            </div>

          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Credential;
