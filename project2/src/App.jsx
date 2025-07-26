import "./App.css";
import Hero from "./components/Hero";
import HeroText from "./components/HeroText";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="w-[1440px]  mt-1.5 ">
          <Navbar />
          <HeroText />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
