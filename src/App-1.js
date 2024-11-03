import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Connect';
import Projects from './pages/Error';
import ContactMe from './pages/ContactMe';
import Contact from './pages/Contact';
import Connect from './pages/Connect';

function App() {

  return (
    <>
    <Navbar />
      <div className='homepage-container-web'>
          <Home />
          <About />
          <Connect />
          <Contact />
          <ContactMe />
      </div>
    <div className='homepage-container-devices'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Contact />}/>
        <Route path='/contact' element={<ContactMe />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;