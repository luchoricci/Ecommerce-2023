import { memo } from "react";
import "./styles.css";


const Card = memo(({
  id,
  title,
  images,
  category,
  description,
  price,
  stock,
  onShowDetails,
  onAddToCart,

}) => {

  return (
    <div className="card" >
      <button className="cardButtonContent" type="button" onClick={() => onShowDetails(id)}>
      
        <img className="cardImage" src={images} alt={title} />
     
        <div className="cardContent">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardCategory">{category}</p>
          <p className="cardDescription">{description}</p>
          <p className="cardPrice">$ {price}</p>
          <p className="cardStock">{stock} Left</p>
        </div>
      </button>
      <div className="cardActions">
        <button onClick={() => onAddToCart(id)}> AtC</button>
      </div>
    </div>
  );
});

export default Card;
