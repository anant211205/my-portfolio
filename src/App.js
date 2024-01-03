import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "../src/styles/app.css" ;
// import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      {/* <About/> */}
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
