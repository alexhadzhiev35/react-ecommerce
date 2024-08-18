/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import apiRequester from "../../utils/apiRequester";
import "./Comment.css";

const Comment = ({ comment, onDelete, onUpdate }) => {
  const { auth } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(comment.content);

  const handleDelete = async () => {
    try {
      await apiRequester(
        `http://localhost:3030/data/comments/${comment._id}`,
        "DELETE",
        null,
        auth.accessToken
      );
      onDelete(comment._id);
    } catch (err) {
      console.error("Failed to delete comment:", err);
    }
  };

  const handleEdit = async () => {
    try {
      await apiRequester(
        `http://localhost:3030/data/comments/${comment._id}`,
        "PATCH",
        { content },
        auth.accessToken
      );
      setIsEditing(false);
      onUpdate(comment._id, content);
    } catch (err) {
      console.error("Failed to update comment:", err);
    }
  };

  return (
    <div className="comment">
      {isEditing ? (
        <>
          <textarea
            className="comment-text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="comment-saveBtn" onClick={handleEdit}>
            Save
          </button>
        </>
      ) : (
        <p>{content}</p>
      )}

      {auth && auth._id === comment._ownerId && (
        <div className="comment-actions">
          <button
            className="comment-editBtn"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
          <button className="comment-deleteBtn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Comment;
