import React from "react"
import NavBar from "./components/NavBar"
import  Home  from "./components/Home";
import About from "./components/About";
import SlickSlider from "./components/SlickSlider";
import Contact from "./components/Contact";
import MockData from "./components/MockData";





function App() {
  return (
    <div className="  bg-no-repeat bg-cover overflow-hidden">
      <NavBar />
      <Home />
      <About />
      <SlickSlider />
      <MockData />
      <Contact />
    </div>
  );
}

export default App;