import { color } from '../../common/constants/styles/colors';
import styled from "styled-components";

export const Card = styled.div`
  width: 350px;
  height: 470px;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const HeadC = styled.div`
  background-color: ${color.white};
  text-align: center;
  width: 100%;
  height: 50px;
  padding: 1rem;
`;

export const Title = styled.h1`
  justify-items: center;
  font-size: 1.5rem;
`;

export const Image = styled.div`
  width: 350px;
  height: 197px;
`;
export const ImageGame = styled.img`
  border-radius: 10px 10px 0px 0px;
  width: 350px;
  height: auto;
`;

export const Description = styled.p`
  padding: 1rem;
  font-size: 0.8rem;
  text-align: center;
  color: ${color.grey}
`;

export const Price = styled.p`
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
  color: ${color.blue};
  font-weight: bold;
`;

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
`;

export const Counter = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
`;