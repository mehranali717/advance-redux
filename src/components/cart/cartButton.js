import { useDispatch, useSelector } from "react-redux";
import classes from "./cartButton.module.css";
import { uiActions } from "../../store/ui-slice";
const CartButton = (props) => {
  const cartItems = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();
  const displayCart =()=>{
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={displayCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
