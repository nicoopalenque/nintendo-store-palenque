import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  margin-bottom: 100px
`;
export const Image = styled.img`
  display: flex;
  margin: auto;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;