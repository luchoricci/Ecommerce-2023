import "./styles.css";

import { useState } from "react";

import Input from "../../components/input";
import Card from "../../components/Product/Card";
import PDetail from "../../components/Product/Pdetail";
import { useFetch } from "../../hooks/useFetch";
import { API_URLS } from "../../constants/APIURL";
import Loader from "../../components/Loader/";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider/Slider";

function Store() {
  const navigate = useNavigate();
  // const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);
  // const [showDetails, setShowDetails] = useState(false);
  // const [productDetail, setProductDetail] = useState(null);
  const [productsFiltered, setProductsFiltered] = useState([]);

  const {
    data: products,
    loading: loadingProducts,
    error: errorProducts,
  } = useFetch(API_URLS.PRODUCTS.URL, API_URLS.PRODUCTS.config);

  const {
    data: categories,
    loading: loadingCategories,
    error: errorCategories,
  } = useFetch(API_URLS.CATEGORY.URL, API_URLS.CATEGORY.config);

  const filterBySearch = (query) => {
    let updateProductList = [...products];

    updateProductList = updateProductList.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setProductsFiltered(updateProductList);
  };
  const onChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    filterBySearch(value);
  }; 
  
 const onFocus = () => {
    setActive(true);
  };
  const onBlur = () => {
    setActive(false);
  };
 
 

  const onShowDetails = (id) => {
    navigate(`/products/${id}`)
  };
 

  return (
    <div>
      <div className="">
        <div className="categoriesContainer">
          {loadingCategories && <Loader />}
          {errorCategories && <h2>{errorCategories}</h2>}
          <Slider>
            {categories.map((category) => (
              <button type="button" key={category.id} className="categoryContainer" ><p className="categoryName"> {category.name}</p>
              
              </button>
            ))}
          </Slider>
        </div>

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
            active={active}
          />
        </div>
        <h2 className="headerTitleCard">Products</h2>
        <div className="cardContainer">
          {loadingProducts && <Loader />}
          {errorProducts && <h1>Something went wrong</h1>}

          {search.length > 0 && productsFiltered.length === 0 && (
            <h1>Product not found.</h1>
          )}
          {search.length > 0
            ? productsFiltered.map((product) => (
                <Card
                  key={product.id}
                  {...product}
                  onShowDetails={onShowDetails}
                />
              ))
            : products.map((product) => (
                <Card
                  key={product.id}
                  {...product}
                  onShowDetails={onShowDetails}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
