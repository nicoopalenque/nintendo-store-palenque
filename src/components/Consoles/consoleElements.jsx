import { color } from '../../common/constants/styles/colors';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0; 
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: auto;
  margin: 1rem auto;
  background-color: ${color.red};
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.2px;
  text-align: center;
  color: ${color.white};
  font-weight: bold;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  justify-content: space-around;
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${color.white};  
`;

export const Image = styled.img`
  width: 300px;
  height: 250px;
`;

export const Storage = styled.p`
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  color: ${color.white};
  font-size: 2rem;
`;