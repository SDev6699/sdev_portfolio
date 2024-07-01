import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/project/Projects";
import TechStack from "./components/TechStack";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white dark:bg-custom-bg">
        <Header/>
        <Home/>
        <About/>
        <TechStack/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
