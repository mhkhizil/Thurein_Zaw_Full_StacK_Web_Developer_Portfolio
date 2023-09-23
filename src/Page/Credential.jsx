import { useEffect, useState } from "react";
import me from "../../Img/me.jpg";
import Loader from "./Loader";
import { motion } from "framer-motion";

import { ImGithub, ImLinkedin } from "react-icons/im";
import { SiFrontendmentor } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Credential = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  const name = "Thurein Zaw".split("");
  console.log(name);

  const nav = useNavigate();
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
            <p className="text-card-para opacity-50">
              mhkhizilthurainzaw@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 pb-6">
            <a
              href="https://github.com/mhkhizil"
              target="_blank"
              className="w-10 h-10 z-50 group duration-150 grid place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  hover:bg-white relative cursor-pointer after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]"
            >
              <ImGithub className="text-white duration-150 group-hover:text-gray text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/thurein-zaw-62ab73291/"
              target="_blank"
              className="w-10 h-10 grid hover:bg-white group z-50 cursor-pointer duration-150 place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]"
            >
              <ImLinkedin className="text-white text-xl group-hover:text-gray duration-150" />
            </a>
            <a
              href="https://www.frontendmentor.io/home"
              target="_blank"
              className="w-10 h-10 grid hover:bg-white group z-50 cursor-pointer duration-150 place-items-center border border-[rgba(255,255,255,0.1)] rounded-full  relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-card-background after:rounded-[2rem] after:opacity-[.25]"
            >
              <SiFrontendmentor className="text-white text-xl group-hover:text-gray duration-150" />
            </a>
          </div>
          <div className=" z-50 relative">
            <button
              onClick={() => nav("/contact")}
              className="w-full py-2 transition rounded-xl bg-danger hover:bg-white cursor-pointer hover:text-danger text-white text-lg leading-normal tracking-wider"
            >
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
              I am currently an experienced react based front-end web developer
              who is learning to set my foot into back-end .Read below to know
              my summarize background;
            </p>
            <p className="text-white text-[1.1rem] leading-normal tracking-wide opacity-80">
              Hello, I'm Thurein Zaw, a 20-year-old software engineer with a
              passion for crafting digital experiences. I'm currently pursuing
              my higher education at the University of Sunderland, where I'm
              enrolled in a Higher National Diploma program. My journey into the
              world of programming has equipped me with a versatile skill set,
              encompassing a range of coding technologies and languages such as
              Java, PHP, Dart, Flutter, JavaScript, MYSQL and React. While I
              have a deep appreciation for the intricacies of various
              programming languages, my primary focus lies in the realm of web
              development, particularly in front-end technologies. I am
              extremely dedicated to honing my skills in areas like React,
              JavaScript, and other frontend libraries. The challenge of
              creating visually stunning and highly interactive user interfaces
              is what drives my passion. In addition to front-end development,
              I'm also actively expanding my knowledge in back-end technologies.
              I'm currently learning PHP and Laravel to strengthen my backend
              development skills, as I believe a well-rounded software engineer
              should excel in both front-end and back-end development. My goal
              is to continually evolve as a developer, contributing to
              innovative and user-friendly web applications. Feel free to
              explore my portfolio to see some of the exciting projects I've
              been working on. I'm always open to new opportunities and
              collaborations, so please don't hesitate to reach out—I'd love to
              connect and discuss how we can create something amazing together.
              Thank you for visiting my portfolio, and I look forward to sharing
              more of my journey with you!
            </p>
          </div>

          <div className="experience mt-10">
            <h1 className="text-white text-xl font-medium">Experience</h1>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">
              react js developer
            </h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">
              "I have hands-on experience in React projects,Java and flutter
              projects with team collaboration, implementing responsive web
              designs,using API and utilizing Git version control. My skills in
              building dynamic user interfaces and managing code collaboratively
              make me an asset in developing modern web applications.You can see
              my passion projects in my works section"
            </p>
          </div>

          <div className="education mt-10">
            <h1 className="text-white text-xl font-medium ">Education</h1>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">
              MMS IT SWD Certificate
            </h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">
              In the Special web design course, students also acquire valuable
              skills in web design patterns and we are also introduced to VPS
              (Virtual Private Server) management and React Native development,
              enabling us to create mobile applications with React .While trying
              to get this certificate , I write several website using
              react,javacript,HTML,CSS,tailwind css ,redux and many other
              front-end libraries.Not only that i had also write point of sale
              web application while finishing this certificate using advanced
              technologies{" "}
            </p>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">
              GUSTO UNIVERSITY PEARSON EDEXCEL FOUNDATION CERTIFICATE
            </h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">
              In this foundation program , it has 5 subjects namely-English
              skill whihc imporve our englidh skills,technology skill which
              consist of fundamental concepts of how computer works and networks
              works along with the basic web development concepts,soft skill
              which include how to interact with colleague and other
              people,business skill which introduces fundamental concepts of
              business and digital skill which involve concept on using
              graphical editing apps and office apps to advanced level .
            </p>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">
              AWS Academy Cloud Foundation Certificate
            </h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">
              I have successfully completed the AWS Academy Cloud Foundation
              program, gaining essential knowledge of cloud computing and AWS
              services. The course covered a wide range of topics, including
              cloud computing basics, AWS infrastructure, security practices,
              compute and storage services, networking, databases, monitoring
              tools, cost management strategies, and hands-on labs. This
              comprehensive program has provided me with a strong foundation in
              cloud computing principles and AWS technologies, preparing me for
              future endeavors in cloud and web development. It's important to
              note that AWS offerings may evolve, so I stay updated by verifying
              the latest course content through the AWS website and relevant
              institutions..
            </p>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">
              AWS Academy Cloud Developing Certificate
            </h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">
              I have successfully completed the AWS Academy Cloud Developing
              program, gaining comprehensive knowledge in cloud application
              development using AWS services. Throughout the course, I covered a
              wide range of topics, including cloud-native development, AWS
              SDKs, storage solutions with Amazon S3, securing cloud resources
              with IAM, NoSQL database development with DynamoDB, REST API
              creation and management, serverless computing with Lambda,
              containerization with Docker and AWS Elastic Beanstalk, caching
              strategies, messaging services, orchestrating functions with Step
              Functions, application security, and CI/CD pipelines. This
              extensive training has equipped me with the skills needed to
              design, develop, and deploy robust cloud-native applications on
              the AWS platform, making me well-prepared for cloud development
              and deployment challenges.
            </p>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">
              AWS Academy Cloud Security Foundation Certificate
            </h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">
              I have successfully completed the AWS Academy Cloud Security
              Foundation program, gaining a comprehensive understanding of cloud
              security principles and practices within the AWS environment.
              Throughout the course, I covered essential topics, including
              security design principles, the shared responsibility model,
              access control using IAM, securing infrastructure with VPCs and
              security groups, data protection strategies, logging and
              monitoring with CloudTrail and CloudWatch, incident response and
              management, and preparing for AWS security certifications. This
              thorough training has equipped me with the knowledge and skills
              needed to enhance security in cloud-based applications and
              environments, making me well-prepared for cloud security
              challenges and AWS certifications.
            </p>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">
              Higher National Diploma from University of Sunderland
            </h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">
              I have successfully earned a Higher National Diploma in Computing,
              a significant achievement that reflects my dedication and passion
              for software engineering. This two-year program exposed me to a
              comprehensive array of subjects, each contributing to my holistic
              understanding of the field. In my first year, I embarked on a
              journey through 17 subjects, where I honed my skills in essential
              areas. The programming subject, centered around Java and
              Object-Oriented Programming, not only expanded my coding expertise
              but also allowed me to apply these concepts in practical Java
              programming projects. Networking became a forte as I delved deep
              into the intricacies of network infrastructure construction using
              tools like Packet Tracer. Professional Practice was instrumental
              in fostering my teamwork, communication, and time management
              abilities, equipping me with vital soft skills crucial in a
              professional setting. Database Design and Development taught me
              the step-by-step process of constructing relational databases such
              as paring keys,normalization etc.., with a practical
              implementation using MYSQL. In security subject, I gained
              invaluable insights into the digital threats that loom in our
              interconnected world and learned how to defend against them along
              with the fundamental concepts of cybersecurity. Managing
              Successful Computing Projects exposed me to project management
              techniques and tools like Microsoft Project, emphasizing the
              importance of schedule and time management. Web Design and
              Development allowed me to create visually appealing and
              user-friendly e-commerce websites using HTML, CSS, JavaScript, and
              Bootstrap and I had to design & develop an e-commerce web using
              that tech stack to pass that subject. Math for Computing
              introduced me to various number systems such as binary,octal,
              decimal & hexa decimal and illuminated the profound connections
              between mathematics and computer science. <br />
              In my second year, I delved even deeper into advanced topics.
              Internet of Things (IoT) challenged me to learn the C language and
              employ it in a practical project—designing a blind spot detector
              for cars using Arduino boards to pass that subject(if you want to
              know about that project I can show you). Data Structure and
              Algorithm deepened my understanding of the crucial role these
              elements play in program efficiency, emphasizing space and time
              complexitiesI even have to design and develop a java based program
              using the appropirate data structure & algorithm to make thta
              program most efficient based on time & space complexity
              measurement in order to pass that subject.. Discrete Math
              showcased how advanced mathematical concepts like Dijkstra's and
              Bellman-Ford algorithms are employed in network optimization.
              Computing Research Project honed my research skills as I undertook
              a substantial research project on a topic of my choice. Cloud
              Computing introduced me to the dynamic world of cloud
              technologies, a cornerstone of modern computing. Business
              Intelligence allowed me to explore data science and leverage the
              power of tools like Power BI for in-depth data analysis i even
              have to make project to show alot collected data in easily
              understandable way using poerBI. Finally, Advanced Programming
              challenged me to learn Dart and Flutter, enabling me to design and
              develop mobile applications. My flutter project and experiences
              from that advanced programming subject can be explored in my
              GitHub repository and work section, showcasing my hands-on
              expertise and growth throughout the program. my My Higher National
              Diploma in Computing represents not just a certificate but a
              testament to my commitment to software engineering and my
              readiness to contribute to the ever-evolving world of technology
            </p>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">
              KMD Practical A+ advanced course (ISO Certified)
            </h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">
              I have successfully completed the A+ Advanced class, acquiring a
              solid foundation in computer systems and networking. My coursework
              encompassed a wide range of critical skills, including Windows
              installation, repair, and upgrading, disk management, virus
              protection, device driver and software installation, system
              maintenance, and troubleshooting. Additionally, I gained practical
              experience in indoor wireless networking. This comprehensive
              training has equipped me with the expertise needed to excel in IT
              roles and contribute effectively to any organization
            </p>
            <h6 className="text-lg text-primary font-normal capitalize mt-2 mb-4">
              KMD INFORMATION TECHNOLOGY course (ISO Certified)
            </h6>
            <p className="text-white opacity-80 text-[1.1rem] leading-normal tracking-wide">
              I have successfully completed the Information Technology class,
              where I gained a strong foundation in software engineering,
              Microsoft Access 2013, and Visual Basic .NET. This comprehensive
              curriculum equipped me with essential skills for software
              development, including database management and application
              development. I am confident in my ability to apply these
              competencies effectively in real-world IT scenarios, making me a
              valuable asset to any organization seeking expertise in these
              areas.
            </p>
          </div>

          <div className="skills mt-10">
            <h1 className="c uppercase text-white text-xl font-medium">
              Technologies
            </h1>
            <div className="flex items-center justify-between flex-wrap gap-y-6 mt-8">
              <div className="basis-1/2">
                <span className="text-white opacity-40">100%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  html
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">90%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  css
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">80%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  javascript
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">80%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  react
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">90%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  tailwind
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">95%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  bootstrap
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">20%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  php
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">5%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  laravel
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">30%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  Java
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">25%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  Flutter
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">70%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  RTK
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">15%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  Dart
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">5%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  VB.NET
                </h4>
              </div>
              <div className="basis-1/2">
                <span className="text-white opacity-40">25%</span>
                <h4 className="text-white text-lg font-normal uppercase">
                  MYSQL
                </h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Credential;
