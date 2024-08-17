/* eslint-disable react/prop-types */
import "./ProductCard.css";

import { StarIcon } from "@heroicons/react/24/solid";

const ProductCard = (props) => {
  return (
    <div className="card">
      <img className="image" src={props.imageUrl} alt="Product Image" />
      <p className="name">{props.name}</p>
      <div className="info">
        <span className="price">{props.price}</span>
        <span className="rating">
          {props.rating}
          <StarIcon className="icon" />
        </span>
      </div>

      <button className="btn">Details</button>
    </div>
  );
};

export default ProductCard;
