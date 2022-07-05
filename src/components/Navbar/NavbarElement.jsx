import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink as Link } from "react-router-dom";
import { color } from "../../common/constants/styles/colors";
import styled from "styled-components";

export const Nav = styled.nav`
  background: ${color.white};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: ${color.black};
  display: flex;
  font-weight: bold;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: ${color.red};
  }
  &.active {
    color: ${color.red};
  }
`;

export const Span = styled.span`
  font-size: 1.8rem;
  font-weight: "bold";
  color: ${(props) => props.color};
`;

export const P = styled.span`
  font-size: 1.8rem;
  font-weight: "bold";
  color: ${(props) => props.color};
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${color.black};
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
      color: ${color.red};
    }
  }
`;

export const Shop = styled(FiShoppingCart)`
  font-size: 1.5rem;

  cursor: pointer;
  &:hover {
    color: ${color.red};
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-right: 5rem;
  }
`;

export const CantItems = styled.p`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  margin-top: 0.1rem;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: ${color.red};
  padding: 10px 22px;
  color: ${color.white};
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${color.white};
    color: ${color.red};
  }
`;
