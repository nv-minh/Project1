
import { Link } from "react-router-dom";

const Product = ({ imageUrl, name, productId,countInStock }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>
        console.log()
        <p className="info__count">${countInStock}</p>
        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
