/* eslint-disable react/prop-types */
import "./ProductCard.css";

import { StarIcon } from "@heroicons/react/24/solid";

const ProductCard = (props) => {
  return (
    <div className="card">
      <img
        className="image"
        src="https://ardes.bg/uploads/original/asus-fa506-tuf-gaming-a15-2021-303327.jpg?_gl=1*921kd2*_up*MQ..&gclid=Cj0KCQjwlIG2BhC4ARIsADBgpVStjD2Wj2qLt0WQqCjJzt7JP6N3VUYtMQrAHL4aprS8pFrOLbHQKTkaAk0eEALw_wcB"
        alt="Product Image"
      />
      <p className="name">{props.name}</p>
      <div className="info">
        <span className="price">{props.price}$</span>
        <span className="rating">
          4.5
          <StarIcon className="icon" />
        </span>
      </div>

      <button className="btn">Details</button>
    </div>
  );
};

export default ProductCard;
