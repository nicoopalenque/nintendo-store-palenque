import { color } from '../../common/constants/styles/colors';
import styled from "styled-components";

export const Action = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

export const Button = styled.button`
background-color: ${color.blue};
border: none;
border-radius: 10px;
color: ${color.white};
padding: 1rem;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
margin-left: 0.5rem;
margin-right: 0.5rem;

&:hover {
  background-color: ${color.blueDark}
}
`;

export const Counter = styled.p`
font-size: 1.5rem;
font-weight: bold;
padding: 0.5rem;
`;
