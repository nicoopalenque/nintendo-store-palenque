import {
  NavBtn,
  NavBtnLink,
} from "../Navbar/NavbarElement";

const LoginButtons = ({login, path}) => {
  return (
    <NavBtn>
      <NavBtnLink onClick={() => login()} to={`/${path}`}>
        ENTRAR
      </NavBtnLink>
    </NavBtn>
  );
};

export default LoginButtons;
