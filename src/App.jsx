import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Work from "./Page/Work";
import Contact from "./Page/Contact";
import Navbar from "./Page/Navbar";
import Footer from "./Page/Footer";
import Loader from "./Page/Loader";
import Offering from "./Offering";
import Credential from "./Page/Credential";
import { useEffect, useState } from "react";
import Spinner from "./Page/Spinner";

import MatrixBackground from "./Page/MatrixBackground";

const App = () => {
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 2000);
  }, []);


  return (
    <>
      {isLoad ? (
        <Spinner />
      ) : (
        <div id="Matrix" className=" relative">
          <MatrixBackground/>
          <Navbar />
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="contact" element={<Contact />} />
            <Route path="offering" element={<Offering />} />
            <Route path="credential" element={<Credential />} />
          </Routes>

          <Footer />
        
        </div>
      
     
      )}
    </>
  );
};

export default App;
