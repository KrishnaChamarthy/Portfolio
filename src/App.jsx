import React from "react";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import TechStack from "./componenets/TechStack";
import Projects from "./componenets/Projects";
import Experience from "./componenets/Experience";
import Contact from "./componenets/Contact";
import AllProjects from "./componenets/AllProjects";
import { Route, Routes } from "react-router-dom";
import About from "./componenets/About";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
      <div class="relative h-full w-full bg-black">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <><Hero />
    <TechStack />
    <Projects />
    <Experience />
    <Contact /></>
  )
}

export default App;