import {
  Bars,
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
  P,
  Span
} from './NavbarElement';

import React from 'react';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Span color='#00c3e3'>NI</Span>
          <P color='#414548'>NTEN</P>
          <Span color='#e60012'>DO</Span>
        </NavLink>
        <Bars />  
        <NavMenu>
          <NavLink to="/games" >
            Games
          </NavLink>
          <NavLink to="/consoles" >
            Consoles
          </NavLink>
          <NavLink to="/merchs" >
            Merchs
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavLink to="/sign-in">Sign In</NavLink>
          <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar