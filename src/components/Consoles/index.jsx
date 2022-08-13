import { Card, Container, Description, Image, InfoContainer, Storage, Title } from "./consoleElements";
import { useEffect, useState } from "react";

import { ViewMoreLink } from "../Button/ViewMoreLink";

export const ConsoleElement = ({ item, setCartItems }) => {
  const [discount, setDiscount] = useState(0);

  const getDiscount = () => {
    if (item.hotSale) {
      let disc = (item.price * item.discount)/100;
      let total = item.price - disc;
      setDiscount(total.toFixed(2));
    }
  }

  useEffect(() => {
    getDiscount();
  }, []);
  
  return (
    <>
      <Container>
        <Card>
          <InfoContainer>
          <ViewMoreLink item={item}/>

          </InfoContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <Storage>{item.storage}</Storage>
          </InfoContainer>
          <Image src={item.image}/>
        </Card>
      </Container>
    </>
  )
}
