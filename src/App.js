import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "../src/styles/app.css" ;
import { Toaster } from "react-hot-toast";
// import Toaster from "react-hot-toast";
// import About from "./components/About";
// import Home from "./components/Home";
import Footer from "./components/Footer";
// import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Projects/> */}
      <Contact/>
      <Footer/>
      <Toaster position="top-center"/>
    </>
  );
}

export default App;
