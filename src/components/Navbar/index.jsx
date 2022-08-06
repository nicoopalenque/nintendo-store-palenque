import {
  Bars,
  CantItems,
  H3,
  Nav,
  NavLink,
  NavMenu,
  P,
  Profile,
  Shop,
  Span,
} from "./NavbarElement";

import { CartContext } from "../../context/CartContext";
import LoginButtons from "../Button/LoginButtons";
import { color } from "../../common/constants/styles/colors";
import { navBarLinks } from "../../common/constants/menu/links";
import { useContext } from "react";

const Navbar = ({ toggleSidebar }) => {
  const { cartItems, user, login } = useContext(CartContext);

  const loged = () => {
    return (
      <Profile to="/perfil">
        <H3>{user.name}</H3>
      </Profile>
    );
  };

  const dontLoged = () => <LoginButtons login={login} path={"perfil"} />;

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
          {cartItems.length > 0 && (
            <NavLink to="/carrito">
              <Shop /> <CantItems>{cartItems.length}</CantItems>
            </NavLink>
          )}
        </NavMenu>
        {user.name ? loged() : dontLoged()}
      </Nav>
    </>
  );
};

export default Navbar;
