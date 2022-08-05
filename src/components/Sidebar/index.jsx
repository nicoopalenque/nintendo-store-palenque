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
import { sideBarLinks } from "../../common/constants/menu/links";
import { useContext } from "react";

const Sidebar = ({ isOpen, toggleSidebar, itemCount }) => {
  const { cartItems } = useContext(CartContext);

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
                {item === "carrito" ? `${item.toUpperCase()} (${cartItems.length})` : item.toUpperCase()}
              </SidebarLink>
            ))}
          </SidebarMenu>
          <SideBtnWrapper>
            <SidebarRoute to="/sing-in" onClick={toggleSidebar}>
              Entrar
            </SidebarRoute>
          </SideBtnWrapper>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
