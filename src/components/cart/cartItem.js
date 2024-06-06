import { useSelector } from "react-redux";
import classes from "./cartItem.module.css";

const CartItem = (props) => {
  const cartItem = useSelector(state => state.cart.items);
  return (
    <li className={classes.item}>
      {cartItem.map((item) => <>
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>
            <span className={classes.itemprice}>{item.price}:-RS</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{item.quantity}</span>
          </div>
          <div className={classes.actions}>
            <button >-</button>
            <button>+</button>
          </div>
        </div>
      </>)}
    </li>
  );
};

export default CartItem;
