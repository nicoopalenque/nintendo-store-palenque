import { useContext, useEffect, useState } from "react";

import BoughtListView from "../../components/BoughtList";
import { CartContext } from "../../context/CartContext";
import { H1 } from "../../components/BoughtList/BoughtListElement";
import { Loading } from "../../components/Loading/LoadingElement";
import { getBoughts } from "../../services/bought";

const Profile = () => {
  const { user } = useContext(CartContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getBoughts(user).then((data) => setItems(data));
    } , 800);
  }, []);

  const dontLoged = () => <H1>Debe Iniciar Sesion</H1>;
  const loged = () => {
    return (
      <>
        <H1>Tus Compras</H1>

        {items.length === 0 && <Loading/>}
        {items.map((item) => (
          <BoughtListView key={item.id} item={item} />
        ))}
      </>
    );
  };

  return <>{user.name ? loged() : dontLoged()}</>;
};

export default Profile;
