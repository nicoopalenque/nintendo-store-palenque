import { color } from '../../common/constants/styles/colors';
import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 4.5rem;
  padding: 0.5rem;
  width: 80%;

  @media screen and (min-width: 768px) {
    margin: 0 3.5rem;
    padding: 0.5rem;
    width: calc(100% + 1rem);
  }
  @media screen and (max-width: 415px) {
    margin: 2.5rem;
  }
`;

export const Container = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 520px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  margin-top: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 768px) {
    height: 280px;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 290px;
  margin-top: 5px;
  @media screen and (max-width: 768px) {
    width: 260px;
  }
  @media screen and (max-width: 415px) {
    width: 160px;
  }
`;

export const Product = styled.div`
  position: absolute;
  width: 40%;
  height: 100%;
  top: 10%;
  left: 60%;
`;

export const P = styled.p`
  text-transform: none;
  letter-spacing: 0;
  margin-bottom: 17px;
  color: ${color.grey};
  font-size: 0.7em;
  line-height: 1.6em;
  margin-right: 25px;
  margin-top: 10px;
`;

export const H1 = styled.h1`
  font-size: 1em;
  color: ${color.grey};
  margin-top: -5px;
  margin-bottom: 10px;
`;

export const H2 = styled.h2`
  color: ${color.blue};
  margin-top: -5px;
`;

export const Add = styled.button`
  width: 67%;
  background: darken($light, 10%);
  padding: 10px;
  display: inline-block;
  outline: 0;
  border: 0;
  margin: -1px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${color.white};
  background: ${color.red};

  cursor: pointer;
  &:hover {
    background-color: ${color.white};
    color: ${color.red};
    transition: all 0.4s ease-in-out;
  }
`;
