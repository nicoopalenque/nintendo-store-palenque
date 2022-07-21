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

import { color } from "../../common/constants/styles/colors";
import { navBarLinks } from "../../common/constants/menu/links";

const Navbar = ({ toggleSidebar, itemCount }) => {
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
            <Shop /> <CantItems>{itemCount}</CantItems>
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
