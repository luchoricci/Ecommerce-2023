import "./styles.css";
import PDetail from "../../components/Product/Pdetail";
import Loader from "../../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { API_URLS } from "../../constants/APIURL";
import { useFetch } from "../../hooks/useFetch";

function ProductDetail() {
  const { productId } = useParams();

  const navigate = useNavigate();
  const urlProductDetail = `${API_URLS.PRODUCTS.URL}/${productId}`
  const { data, loading, error } = useFetch(
    urlProductDetail,
    API_URLS.PRODUCTS.config
  );
  const history = window.history;
  

  return (
    <>
      <div className="headerDetailContainer">
        {history.length > 2 ? (
          <button onClick={() => navigate(-1)} className="backButton">
            {" "}
            Back
          </button>
        ) : null}
        <h2 className="headerTitleCard">Product Detail</h2>
      </div>
      {loading && (
        <div className="loaderContainer">
          <Loader />
        </div>
      )}
      {error && <p>Something went wrong</p>}
      <PDetail {...data} />
    </>
  );
}

export default ProductDetail;
