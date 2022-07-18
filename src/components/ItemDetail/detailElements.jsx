import { color } from "../../common/constants/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${color.white};
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 80%;
    height: 100%;
    margin-bottom: 10px;
  }
`;

export const Detail = styled.p`
  font-size: 1rem;
  color: ${color.grey};
  margin-bottom: 10px;
  text-align: center;
`;

export const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${color.blue};
`;

export const Prices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

export const Discount = styled.p`
  font-size: 1.5rem;
  color: ${color.red};
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  text-decoration: line-through;
`;

export const Span = styled.span`
  margin-left: 0.5rem;
  background-color: ${color.red};
  width: 2.3rem;
  height: 1.5rem;
  border-radius: 20%;
  padding-top: 0.2rem;
  padding-left: 0.1rem;
  color: ${color.white};
`;

export const Spec = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid ${color.grey};
  padding-top: 10px;
  margin-top: 10px;
  width: 80%;
  font-size: 1rem;
  color: ${color.grey};

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;

`;
export const Info = styled.p`
  font-size: 1rem;
  color: ${color.grey};
  margin-bottom: 10px;
  margin-top: 1rem;
`;