import "./App.css";
import Header from "../src/components/Header";
import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import ProductDetail from "./pages/ProductDetail";
import { useFetch } from "./hooks/useFetch";

function App() {


  return (
    <div className="">
      <Header logo="Logo" />
      
      <Routes>
        <Route path='/' element={<Store/>} />
        <Route path='/products/:productId' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
export default App;
