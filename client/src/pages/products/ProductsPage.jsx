import { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import "./ProductsPage.css";

import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

const products = [
  {
    name: "SuperSonic Wireless Earbuds",
    description:
      "Experience high-quality sound with SuperSonic Wireless Earbuds. Equipped with noise cancellation, 24-hour battery life, and touch controls. Perfect for music lovers on the go.",
    price: 79.99,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Quantum 4K Ultra HD Smart TV",
    description:
      "Enjoy a cinematic experience at home with the Quantum 4K Ultra HD Smart TV. Features a 65-inch display, HDR support, and built-in streaming apps.",
    price: 999.99,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "HyperDrive Gaming Laptop",
    description:
      "Power through your favorite games with the HyperDrive Gaming Laptop. Packed with an Intel i9 processor, 32GB RAM, and an RTX 3080 GPU, this laptop is built for performance.",
    price: 1799.99,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "AeroFit Fitness Tracker",
    description:
      "Track your fitness goals with the AeroFit Fitness Tracker. Includes heart rate monitoring, GPS tracking, and a sleek, waterproof design.",
    price: 129.99,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Photon Portable Charger",
    description:
      "Keep your devices powered up with the Photon Portable Charger. With a 20,000mAh capacity and fast charging capabilities, it’s perfect for travel and emergencies.",
    price: 49.99,
    imageUrl: "https://via.placeholder.com/150",
  },
];

const ProductsPage = () => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      {auth && (
        <Link to="/product-add" className="addBtn ">
          List new product
        </Link>
      )}

      <div className="productList">
        {products.map((product) => (
          <ProductCard key={product.name} {...product}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
