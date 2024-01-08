import "./styles.css";

const PDetail = ({
  id,
  title,
  image,
  category,
  description,
  price,
  stock,
  onAddToCart,
}) => {
  return (
    <div className="detailContainer">
      <div className="detailCard">
        <img className="detailCardImage" src={image} alt={title} />
        <div className="detailCardContent">
          <h3 className="detailCardTitle">{title}</h3>
          <p className="detailCardCategory">{category}</p>
          <p className="detailCardDescription">{description}</p>
          <p className="detailCardPrice">$ {price}</p>
          <p className="detailCardStock">{stock} Left</p>
        </div>
      </div>
      <div className="detailCardActions">
        <button onClick={() => onAddToCart(id)}> AtC</button>
      </div>
    </div>
  );
};

export default PDetail;
