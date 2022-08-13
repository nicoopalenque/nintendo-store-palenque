import {
  Button,
  CantItems,
  Container,
  Description,
  Image,
  Info,
  Input,
  Offer,
  Stock,
  Title,
  TotalItem
} from "./CartViewElement";
import { useEffect, useState } from "react";

const ItemView = ({ item, cartItems, setCartItems, setTotal }) => {
  const [price, setPrice] = useState(item.priceDiscount ? item.priceDiscount : item.price);
  const [quantity, setQuantity] = useState(item.quantity);

  const deleteItem = () => {
    setTotal((prev) => prev - (price * quantity));
    let newCartItems = cartItems.filter((game) => game.id !== item.id);
    setCartItems(newCartItems);
  };

  const increment = () => {
    if(item.stock !== quantity) {
      setTotal((prev) => prev + price);
    }
    return quantity !== item.stock ? setQuantity(quantity + 1) : true
  }
  const decrement = () => {
    if(quantity > 1){
      setTotal((prev) => prev - price);
    }
    return quantity > 1 ? setQuantity(quantity - 1) : true
  }

  useEffect(() => {
    setTotal((prev) => prev + ((price * quantity) / 2));
  }, [price]);

  return (
    <>
      <Container>
        <Info>
          <Image src={item.image} />
        </Info>
        <Description>
          <Title>{item.title}</Title>
          {item.hotSale && <Offer>{item.discount}%</Offer>}
          <Button
            style={{
              width: "auto",
              height: "auto",
              margin: "1rem 0",
            }}
            onClick={() => deleteItem(item)}
          >
            Eliminar
          </Button>
        </Description>
        <Stock>
          <Button
            onClick={() => decrement()}
          >
            -
          </Button>
          <Input>{quantity}</Input>
          <Button
            onClick={() => increment()}
          >
            +
          </Button>
          <Description>
            <CantItems>{item.stock} restantes</CantItems>  
          </Description>
        </Stock>
        <Info>
          <TotalItem>$ {(price*quantity).toFixed(2)}</TotalItem>
        </Info>
      </Container>
    </>
  );
};

export default ItemView;
