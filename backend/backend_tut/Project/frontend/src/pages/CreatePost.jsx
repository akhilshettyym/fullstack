import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/CreatePost.css";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios.post(import.meta.env.VITE_CREATE_POST, formData)
      .then((res) => {
        navigate("/feed");
      })
      .catch((err) => {
        console.log(err);
        alert("Error creating post");
      });
  };

  return (
    <section className="create-post-section">
      <div className="create-form-container">
        <h1 className="create-title"> Create Post </h1>

        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept="image/*" id="post-image" className="file-input" required />
            <label htmlFor="post-image" className="upload-label"> Click to select an image </label>


          <input type="text" name="caption" placeholder="Write a caption for your post..." className="caption-input" required />

          <div className="button-group">
            <button type="submit" className="btn btn-post"> Post Now </button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate("/feed")}> View Feed </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;