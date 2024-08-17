import { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import "./ProductsPage.css";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import apiRequester from "../../utils/apiRequester";

const ProductsPage = () => {
  const { auth } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await apiRequester(
          "http://localhost:3030/data/products"
        );
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the function to fetch products when the component mounts
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    <>
      {auth && (
        <Link to="/product-add" className="addBtn">
          List new product
        </Link>
      )}

      <div className="productList">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} {...product}></ProductCard>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
