import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Projects1 from "./pages/Projects1";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import ProjectDisplay1 from "./pages/ProjectDisplay1";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/projects1" element={<Projects1 />} />
          <Route path="/project1/:id" element={<ProjectDisplay1 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
