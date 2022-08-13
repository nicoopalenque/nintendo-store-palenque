import { useEffect, useState } from "react";

import { ConsoleElement } from "../../components/Consoles";
import { Loading } from "../../components/Loading/LoadingElement";
import { getItems } from "../../services/games";

const Consoles = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() =>{
      getItems('console').then((data) => setItems(data));
    }, 800);
  }, [])
  
  return (
    <>
      {items.length === 0 && <Loading />}
      {items.map((item) => (
        <ConsoleElement key={item.id} item={item}/>
      ))}
    </>
  )
}

export default Consoles