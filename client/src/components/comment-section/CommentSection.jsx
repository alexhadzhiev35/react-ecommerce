/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../contexts/authContext";
import apiRequester from "../../utils/apiRequester";
import Comment from "../comment/Coment";
import "./CommentSection.css";

const CommentsSection = ({ productId }) => {
  const { auth } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const result = await apiRequester(
          `http://localhost:3030/data/comments?where=productId%3D%22${productId}%22`
        );
        setComments(result);
      } catch (err) {
        console.error("Failed to fetch comments:", err);
      }
    };

    fetchComments();
  }, [productId]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    try {
      const createdComment = await apiRequester(
        "http://localhost:3030/data/comments",
        "POST",
        { content: newComment, productId },
        auth.accessToken
      );
      setComments([...comments, createdComment]);
      setNewComment("");
    } catch (err) {
      console.error("Failed to add comment:", err);
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment._id !== commentId));
  };

  const handleUpdateComment = (commentId, newContent) => {
    setComments(
      comments.map((comment) =>
        comment._id === commentId
          ? { ...comment, content: newContent }
          : comment
      )
    );
  };

  return (
    <>
      <h3 className="comments-heading">Comments</h3>
      <div className="comments-section">
        <div className="prev-comments">
          {comments.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              onDelete={handleDeleteComment}
              onUpdate={handleUpdateComment}
            />
          ))}
        </div>

        {auth && (
          <div className="add-comment">
            {/* <h4>Add comment</h4> */}
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Nice product! Love it"
            />
            <button onClick={handleAddComment}>Post Comment</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CommentsSection;
