import "./App.css";
import Header from "./assets/components/Header";
import { useEffect, useState } from "react";
import Counter from "./assets/components/Counter";
import Input from "./assets/components/input";
import Card from "./assets/components/Product/Card";
import PDetail from "./assets/components/Product/Pdetail";

function App() {
  // const [counter, setCounter] = useState(0);
  const [task, setTask] = useState("");
  const [active, setActive] = useState(false);
  const [products, setProducts] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [productDetail, setProductDetail] = useState(null);

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
    setTask(value);
  };

  const onBlur = () => {
    setActive(false);
  };
  const onFocus = () => {
    setActive(true);
  };
  const inputClass = `inputContainer ${active ? "active" : ""}`;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://64addf9cb470006a5ec67639.mockapi.io/products",
          {
            method: "GET",
            headers: {
              "Content-Type": "application.json",
            },
          }
        );
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

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
        <button className="backButton" onClick={() => setProductDetail(false)} >back</button>
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
            {products.map((product) => (
              <Card {...product} onShowDetails={onShowDetails} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
