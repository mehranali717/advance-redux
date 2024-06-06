import { useSelector } from "react-redux";
import { Cart, Layout, Products } from "./components";

function App() {
 const isVisible = useSelector(state => state.ui.cartIsVisible)
  return (
    <Layout>
      {isVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
