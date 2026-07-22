import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Feed.css";

const Feed = () => {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://i.pinimg.com/736x/dd/8d/e1/dd8de184839743a6b585aae22646097d.jpg",
            caption: "wonderful scenery",
        }
    ])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_POSTS)
            .then((res) => {
                setPosts(res.data.posts || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="feed-section">
            {loading ? (
                <div className="loading">Loading posts...</div>
            ) : posts.length > 0 ? (
                <div className="posts-grid">
                    {posts.map((post) => (
                        <div key={post._id} className="post-card">
                            <div className="post-image-container">
                                <img src={post.image} alt={post.caption || "Post image"} className="post-image" />
                            </div>
                            <div className="post-content">
                                <p className="post-caption">{post.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-posts">
                    <h2>No posts yet</h2>
                    <p>Be the first to share something awesome!</p>
                    <button className="btn btn-create" onClick={() => navigate("/create-post")}>
                        Create Your First Post
                    </button>
                </div>
            )}
            <div className="feed-header">
                <button className="btn btn-create" onClick={() => navigate("/create-post")}> + Create </button>
            </div>
        </section>
    );
};

export default Feed;