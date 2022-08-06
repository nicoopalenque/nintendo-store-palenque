import { Container, Data, Element, Info, Items, Title } from './BoughtListElement';

import React from 'react'

const BoughtListView = ({item: { id, items, total, date }}) => {
  const newDate = new Date(date);
  const buyDate = `${newDate.getDay()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`;
  return (
    <Container>
      <Element>
        <Info>
          <Title>ID de compra:</Title>  
          <Data>{id}</Data>  
        </Info>
        <Items>
          <Title>Items:</Title>
          {
            items.map((item, key) => (
              <Data key={key}>{item.title} x{item.quantity}</Data>
            ))
          }
        </Items>
        <Info>
          <Title>Total:</Title>
          <Data>{total}</Data>
        </Info>
        <Info>
          <Title>Fecha:</Title>
          <Data>{buyDate}</Data>
        </Info>
      </Element>
    </Container>
  )
}

export default BoughtListView;