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
import { userLogin } from "../../common/constants/user";

const Navbar = ({ toggleSidebar }) => {
  const { cartItems, setUser, user } = useContext(CartContext);
  const login = () => {
    setUser(userLogin);
  };

  const loged = () => {
    return <h3>{user.name}</h3>;
  };
  const dontLoged = () => {
    return (
      <NavBtn>
        <NavLink onClick={() => login()} to="/sign-in">
          ENTRAR
        </NavLink>
        <NavBtnLink to="/sign-up">REGISTRO</NavBtnLink>
      </NavBtn>
    );
  };

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
              {item.toUpperCase()}
            </NavLink>
          ))}
          {cartItems.length > 0 ? (
            <NavLink to="/carrito">
              <Shop /> <CantItems>{cartItems.length}</CantItems>
            </NavLink>
          ) : null}
        </NavMenu>
        {
          user.name ? loged() : dontLoged()
        }
      </Nav>
    </>
  );
};

export default Navbar;
