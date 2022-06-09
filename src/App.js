import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

    </div >
  );
}

export default App;
