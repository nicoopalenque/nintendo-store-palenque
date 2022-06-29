import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Consoles from './pages/consoles';
import Games from './pages/games';
import Home from './pages';
import Merchs from './pages/merchs';
import Navbar from './components/Navbar';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/games" element={<Games />} />
        <Route exact path="/consoles" element={<Consoles />} />
        <Route exact path="/merchs" element={<Merchs />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
