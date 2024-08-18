import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import apiRequester from "../../utils/apiRequester";
import CommentsSection from "../../components/comment-section/CommentSection";
import "./ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { auth } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
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
        navigate("/error");
        setError("Failed to fetch product details");
        console.error("Error fetching product details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmed) {
      try {
        await apiRequester(
          `http://localhost:3030/data/products/${productId}`,
          "DELETE",
          null,
          auth.accessToken
        );
        navigate("/products");
      } catch (err) {
        console.error("Failed to delete product:", err);
        setError("Failed to delete product");
      }
    }
  };

  const handleEdit = () => {
    navigate(`/products/${productId}/edit`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-details">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <div className="product-info">
            <div className="left-part">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
            </div>

            <div className="right-part">
              <p>
                <strong>Description:</strong> {product.description}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Memory:</strong> {product.memory}
              </p>
              <p>
                <strong>Processor:</strong> {product.processor}
              </p>
              <p>
                <strong>GPU:</strong> {product.gpu}
              </p>

              <p>
                <strong>Condition:</strong> {product.condition}
              </p>

              <p>
                <strong>Rating:</strong> {product.rating}
              </p>
              <p>
                <strong>Price:</strong> {product.price}
              </p>

              {auth && auth._id === product._ownerId && (
                <div className="actions">
                  <button onClick={handleEdit} className="btn-edit">
                    Edit
                  </button>
                  <button onClick={handleDelete} className="btn-delete">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <CommentsSection productId={productId} />
        </>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
