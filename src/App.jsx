import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Consoles from './pages/consoles';
import Games from './pages/games';
import Home from './pages/home';
import Merchs from './pages/merchs';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import { useState } from 'react';

function App() {

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Routes>
        <Route exact path="/" element={<Home />} active/>
        <Route exact path="/juegos" element={<Games />} />
        <Route exact path="/consolas" element={<Consoles />} />
        <Route exact path="/accesorios" element={<Merchs />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
