import { Link } from "react-router-dom";
import { color } from "../../common/constants/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 10% 10%;
  gap: 20px;
  margin: 0 auto;
  padding: 2rem;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
export const Info = styled.div`
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.div`
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Stock = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Title = styled.h3`
  color: ${color.black};
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  text-align: left;
  justify-content: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const Button = styled.button`
  border: none;
  background: ${color.blueDark};
  color: ${color.white};
  padding: 5px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 50px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${color.blue};
    color: ${color.white};
  }
`;
export const Input = styled.p`
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  width: 50px;
  height: 50px;
  padding: 1rem;
`;
export const CantItems = styled.p`
  color: ${color.grey};
  font-weight: bold;
  font-size: 1rem;
`;

export const Price = styled.p`
  color: ${color.black};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;

  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const TotalItem = styled.p`
  color: ${color.blue};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;

  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Offer = styled.p`
  color: ${color.red};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;

  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Action = styled.div`
  display: flex;
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const LinkTo = styled(Link)`
  border: none;
  background: ${color.blueDark};
  color: ${color.white};
  padding: 1.2rem;
  margin: 0 auto;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  width: 20%;
  height: 50px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  text-align: center;

  &:hover {
    background: ${color.blue};
    color: ${color.white};
  }

  @media (max-width: 768px) {
    width: 45%;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`;

export const P = styled.p`
  color: ${color.black};
  font-size: 1.5rem;
  padding: 1rem;
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
