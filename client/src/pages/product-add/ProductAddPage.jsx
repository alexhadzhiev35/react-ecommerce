import "./ProductAddPage.css";

import { useContext, useState } from "react";
import apiRequester from "../../utils/apiRequester";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

function ProductAddPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [memory, setMemory] = useState("");
  const [processor, setProcessor] = useState("");
  const [gpu, setGpu] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      name,
      category,
      memory,
      processor,
      gpu,
      description,
      rating,
      condition,
      price,
      imageUrl,
    };

    addProduct(newProduct);

    setName("");
    setCategory("");
    setMemory("");
    setProcessor("");
    setGpu("");
    setDescription("");
    setRating("");
    setCondition("");
    setPrice("");
    setImageUrl("");
  };

  const addProduct = async (productData) => {
    try {
      const result = await apiRequester(
        "http://localhost:3030/data/products",
        "POST",
        productData,
        auth?.accessToken
      );
      navigate("/products");
      console.log(result);
    } catch (error) {
      console.error("Adding product failed:", error);
    }
  };

  return (
    <div className="product-add-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="memory">Memory:</label>
          <input
            type="text"
            id="memory"
            value={memory}
            onChange={(e) => setMemory(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="processor">Processor:</label>
          <input
            type="text"
            id="processor"
            value={processor}
            onChange={(e) => setProcessor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="gpu">GPU:</label>
          <input
            type="text"
            id="gpu"
            value={gpu}
            onChange={(e) => setGpu(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="text"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="condition">Condition:</label>
          <input
            type="text"
            id="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductAddPage;
