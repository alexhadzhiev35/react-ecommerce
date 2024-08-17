import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import apiRequester from "../../utils/apiRequester";
import "./ProductEditPage.css";

const ProductEditPage = () => {
  const { productId } = useParams();
  const { auth } = useContext(AuthContext);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    memory: "",
    processor: "",
    gpu: "",
    description: "",
    rating: "",
    condition: "",
    price: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await apiRequester(
          `http://localhost:3030/data/products/${productId}`
        );
        setProduct(data);
      } catch (err) {
        setError("Failed to fetch product details");
        console.error("Error fetching product details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await apiRequester(
        `http://localhost:3030/data/products/${productId}`,
        "PATCH",
        product,
        auth.accessToken
      );
      navigate(`/products/${productId}`);
    } catch (err) {
      console.error("Failed to update product:", err);
      setError("Failed to update product");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-edit-form">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="memory">Memory:</label>
          <input
            type="text"
            id="memory"
            name="memory"
            value={product.memory}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="processor">Processor:</label>
          <input
            type="text"
            id="processor"
            name="processor"
            value={product.processor}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gpu">GPU:</label>
          <input
            type="text"
            id="gpu"
            name="gpu"
            value={product.gpu}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="text"
            id="rating"
            name="rating"
            value={product.rating}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="condition">Condition:</label>
          <input
            type="text"
            id="condition"
            name="condition"
            value={product.condition}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default ProductEditPage;
