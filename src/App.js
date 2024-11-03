import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Calender from './pages/Calender';
import Profile from './pages/Profile';
import Error from './pages/Error'

function App() {

  return (
    <>
    <NavBar />
    <div className='homepage-container-devices'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/calender' element={<Calender />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;