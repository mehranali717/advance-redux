import { useDispatch } from 'react-redux';
import Card from '../ui/card';
import classes from './productItem.module.css';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();
  const addCartHandler = ()=>{
    dispatch(cartActions.addItemToCart(props))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
