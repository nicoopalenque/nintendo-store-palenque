import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CartContext from "./context/CartContext";
import CartView from "./components/CartView";
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
    <CartContext>
      <Router>
        <Sidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />
        <Navbar toggleSidebar={toggleSidebar}/>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            index
            path="/juegos"
            element={<Games />}
          />
          <Route
            path="/juegos/:title"
            element={<ItemDetail/>}
          />
          <Route path="/consolas" element={<Consoles />} />
          <Route path="/accesorios" element={<Merchs />} />
          <Route path="/carrito" element={<CartView />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </CartContext>
  );
}

export default App;
