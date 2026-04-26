import Cart from "./component/cart/Cart";
import CheckOut from "./component/checkout/CheckOut";
import Header from "./component/Header";
import Meals from "./component/meal/Meals";
import { CartContextProvider } from "./context/CartContext";
import { ModalContextProvider } from "./context/ModalContext";

function App() {
  return (
    <>
      <ModalContextProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
          <CheckOut />
        </CartContextProvider>
      </ModalContextProvider>
    </>
  );
}

export default App;
