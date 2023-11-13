import "./App.css";
import Header from "./assets/components/Header";
import { useEffect, useState } from "react";
import Counter from "./assets/components/Counter";
import Input from "./assets/components/input";
import Card from "./assets/components/Product/Card";

function App() {
  const [counter, setCounter] = useState(0);
  const [task, setTask] = useState("");
  const [active, setActive] = useState(false);
  const [products, setProducts] = useState([]);

  const isValidCounter = counter > 0;

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    if (!isValidCounter) return;

    setCounter((prevCounter) => prevCounter - 1);
  };

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
  console.log({ products });
  return (
    <div className="">
      <Header logo={"Logo"} />

      <Counter
        counter={counter}
        onDecrementCounter={decrementCounter}
        onIncrementCounter={incrementCounter}
        isValidCounter={isValidCounter}
      />
      <div style={{ width: "300px", padding: "1rem" }}>
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

      <div className="cardContainer" >
        {products.map((product) => (
         <Card{...product}
        
         />
        ))}
      </div>
    </div>
  );
}

export default App;
