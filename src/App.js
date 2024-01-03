// import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "../src/styles/app.css" ;
import About from "./components/About";
import Home from "./components/Home";
// import Home from "./components/Home";


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      {/* <About/> */}
      <Contact/>
    </>
  );
}

export default App;
