import "./styles.css";

const Card = ({
  id,
  title,
  images,
  category,
  description,
  price,
  stock,
  onShowDetails,
}) => {
  return (
    <div className="card" onClick={() => onShowDetails(id)}>
     <img className="cardImage" src={images[0]} alt={title} />
      <div className="cardContent">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardCategory">{category}</p>
        <p className="cardDescription">{description}</p>
        <p className="cardPrice">$ {price}</p>
        <p className="cardStock">{stock} Left</p>
      </div>
      <div className="cardActions">
        <button > AtC</button>
      </div>
    </div>
  );
};

export default Card;
