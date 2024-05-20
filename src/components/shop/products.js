import classes from "./products.module.css";
import ProductItem from "./productItem";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "MY First Book",
    description: "the first book I ever wrote!",
  },
  {
    id: "p2",
    price: 16,
    title: "MY Second Book",
    description: "the Second book I ever wrote!",
  },
  {
    id: "p3",
    price: 12,
    title: "MY Third Book",
    description: "the third book I ever wrote!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
          <ProductItem
          key={product.id}
          id= {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
