import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "../src/styles/app.css" ;
import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Card/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Toaster position="top-center"/>
    </>
  );
}

export default App;
