import "./App.css";
import Header from "./assets/components/Header";
import { useEffect, useState } from "react";
import Counter from "./assets/components/Counter";
import Input from "./assets/components/input";
import Card from "./assets/components/Product/Card";
import PDetail from "./assets/components/Product/Pdetail";
import { useFetch } from "./assets/components/hooks/useFetch";
import { API_URL } from "./assets/components/constants/APIURL";
import Loader from "./assets/components/Loader";

function App() {
  // const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const [productsFiltered, setProductsFiltered] = useState([]);


  const { data: products, loading, error } = useFetch(API_URL.PRODUCTS.URL, API_URL.PRODUCTS.config);
 
 
 
  const filterBySearch = (query) =>{
    let updateProductList = [...products];

    updateProductList = updateProductList.filter((item) =>{
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
setProductsFiltered(updateProductList);

  }

  // const isValidCounter = counter > 0;

  // const incrementCounter = () => {
  //   setCounter((prevCounter) => prevCounter + 1);
  // };

  // const decrementCounter = () => {
  //   if (!isValidCounter) return;

  //   setCounter((prevCounter) => prevCounter - 1);
  // };

  const onChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    filterBySearch(value);
  };

  const onBlur = () => {
    setActive(false);
  };
  const onFocus = () => {
    setActive(true);
  };
  const inputClass = `inputContainer ${active ? "active" : ""}`;


const onShowDetails = (id) =>{
  setShowDetails(true);
  const findProduct = products.find((product) => product.id === id);
  setProductDetail(findProduct);
}


  return (
    <div className="">
      <Header logo={"Logo"} />

      {showDetails ? (
        <>
        <div className="headerDetailContainer">
        <button className="backButton" onClick={() => setShowDetails(false)} >back</button>
        <h2 className="headerTitleCard">Product Detail</h2>
        </div>
        <PDetail {...productDetail} />
        </>
      ) : (
        <>
          <div className="inputContentContainer">
            <Input
              placeHolder="Search"
              type="text"
              id="task"
              required={true}
              name="Task Name"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              className={inputClass}
            />
          </div>
          <h2 className="headerTitleCard">Products</h2>
          <div className="cardContainer">
            {loading && <Loader/>}
            {error && <h1>Something went wrong</h1>}
            {search.length > 0 && productsFiltered.length === 0 && <h1>Product not found.</h1>}
            {
              search.length > 0 ? (
                productsFiltered.map((product) =>(
                <Card key={product.id} {...product} onShowDetails={onShowDetails} />
              )) 
              ): (
            products.map((product) => (
              <Card key={product.id} {...product} onShowDetails={onShowDetails} />
            ))
            )}


          </div>
        </>
      )}
    </div>
  );
}

export default App;
