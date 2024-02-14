import "./App.css";
import Header from "../src/components/Header";
import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/cart-Context";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart/cart";
function App() {


  return (
    <div className="">
      <CartProvider>
      <Header logo="Logo" />
      
      <Routes>
        <Route path='/' element={<Store/>} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      </CartProvider>
    </div>
  );
}
export default App;
