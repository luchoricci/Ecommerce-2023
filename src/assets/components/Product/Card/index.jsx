import "./styles.css";

const Card = ({
  id,
  title,
  image,
  category,
  description,
  price,
  stock,
  onAddToCart,
  onShowDetails,
}) => {
  return (
    <div className="card" onClick={() => onShowDetails(id)}>
     <img className="cardImage" src={image} alt={title} />
      <div className="cardContent">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardCategory">{category}</p>
        <p className="cardDescription">{description}</p>
        <p className="cardPrice">$ {price}</p>
        <p className="cardStock">{stock} Left</p>
      </div>
      <div className="cardActions">
        <button onClick={() => onAddToCart(id)}> AtC</button>
      </div>
    </div>
  );
};

export default Card;
