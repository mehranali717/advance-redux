import { useSelector } from "react-redux";
import { Cart, Layout, Products } from "./components";

function App() {
  const toggleCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {toggleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
