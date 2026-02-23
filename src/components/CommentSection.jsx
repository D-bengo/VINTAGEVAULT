import { useEffect, useState } from "react";
import { getComments, addComment, deleteComment } from "../services/api";

function CommentSection({ carId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const fetchComments = () => getComments(carId).then(setComments);

  useEffect(() => { fetchComments(); }, [carId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { carId, username: "Guest", message: text };
    addComment(newComment).then(() => { setText(""); fetchComments(); });
  };

  const handleDelete = (id) => deleteComment(id).then(() => fetchComments());

  return (
    <div>
      <h3>Comments</h3>
      {comments.map(c => (
        <div key={c.id}>
          <p><strong>{c.username}:</strong> {c.message}</p>
          <button onClick={() => handleDelete(c.id)}>Delete</button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Add comment" required />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CommentSection;