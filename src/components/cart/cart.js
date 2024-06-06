import Card from "../ui/card";
import classes from "./cart.module.css";
import CartItem from "./cartItem";

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
              <CartItem
              />
      </ul>
    </Card>
  );
};

export default Cart;
