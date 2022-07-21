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

import { sideBarLinks } from "../../common/constants/menu/links";

const Sidebar = ({ isOpen, toggleSidebar, itemCount }) => {
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
                {item === "Carrito" ? `${item} (${itemCount})` : item}
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
