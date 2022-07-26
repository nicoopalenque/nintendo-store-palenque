import {
  Bars,
  CantItems,
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
  P,
  Shop,
  Span,
} from "./NavbarElement";

import { CartContext } from "../../context/CartContext";
import { color } from "../../common/constants/styles/colors";
import { navBarLinks } from "../../common/constants/menu/links";
import { useContext } from "react";

const Navbar = ({ toggleSidebar }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <Span color={color.blue}>NI</Span>
          <P color={color.grey}>NTEN</P>
          <Span color={color.red}>DO</Span>
        </NavLink>
        <Bars onClick={toggleSidebar} />
        <NavMenu>
          {navBarLinks.map((item, key) => (
            <NavLink to={`/${item}`} key={key}>
              {item}
            </NavLink>
          ))}
          <NavLink to="/">
            <Shop /> <CantItems>{cartItems.length}</CantItems>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavLink to="/sign-in">Entrar</NavLink>
          <NavBtnLink to="/sign-up">Registro</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
