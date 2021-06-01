import React from "react";

import Cover from "./components/Cover";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Cover />
      <AboutMe />
      <TimeLine />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
