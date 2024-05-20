import { useSelector } from "react-redux";
import Card from "../ui/card";
import classes from "./cart.module.css";
import CartItem from "./cartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {totalQuantity
          ? cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.name,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price,
                }}
              />
            ))
          : ""}
      </ul>
    </Card>
  );
};

export default Cart;
