import { color } from "../../common/constants/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0;
`;

export const H1 = styled.h1`
  color: ${color.blue};
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Element = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  margin: auto;
  width: 90%;
  height: auto;
  padding: 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: black;

  @media (max-width: 768px) {
    width: auto;
    align-items: flex-start;
    flex-direction: column;
    align-content: flex-start;
  }
`;
export const Info = styled.div`
  text-align: center;
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  height: auto;
  width: auto;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: auto;
    text-align: left;
  }
`;

export const Items = styled.div`
  margin-top: 10px;
`;

export const Title = styled.p`
  color: ${color.blue};
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin: 10px;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const Data = styled.p`
  margin: 10px;
`;
