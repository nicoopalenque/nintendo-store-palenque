import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const SignIn = () => {
  const { user } = useContext(CartContext);
  return (
    <div style={styles}>
      <h1>{user.name}</h1>
    </div>
  )
}

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',
}

export default SignIn;