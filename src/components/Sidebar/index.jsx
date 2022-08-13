import {
  CloseIcon,
  Icon,
  SideBtnWrapper,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
} from "./SidebarElement";

import { CartContext } from "../../context/CartContext";
import { Profile } from "../Navbar/NavbarElement";
import { sideBarLinks } from "../../common/constants/menu/links";
import { useContext } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { cartItems, user, login } = useContext(CartContext);
  const { pathname } = window.location;

  const loged = () => {
    return (
      <Profile to='/perfil'>
        <h3>{user.name}</h3>
      </Profile>
    );
  }

  const dontLoged = () => {
    return (
      <>
        <SidebarRoute to={`${pathname}`} onClick={() => login()}>
          ENTRAR
        </SidebarRoute>
      </>
    );
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
        <Icon onClick={toggleSidebar}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            {sideBarLinks.map((item, key) => (
              <SidebarLink key={key} to={`/${item}`} onClick={toggleSidebar}>
                {item === "carrito"
                  ? `${item.toUpperCase()} (${cartItems.length})`
                  : item.toUpperCase()}
              </SidebarLink>
            ))}
          </SidebarMenu>
          <SideBtnWrapper>
            {user.name ? loged() : dontLoged()}
          </SideBtnWrapper>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
