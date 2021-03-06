import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Consoles from "./pages/consoles";
import Games from "./pages/games";
import Home from "./pages/home";
import ItemDetail from "./components/ItemDetail";
import Merchs from "./pages/merchs";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SignIn from "./pages/sign-in/sign-in";
import SignUp from "./pages/sign-up/sign-up";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Routes>
        <>
          <Route path="/" element={<Home />}  />
          <Route path="/juegos" element={<Games />} />
          <Route path="/juegos/:id" element={<ItemDetail />} />
          <Route path="/consolas" element={<Consoles />} />
          <Route path="/accesorios" element={<Merchs />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </>
      </Routes>
    </Router>
  );
}

export default App;
