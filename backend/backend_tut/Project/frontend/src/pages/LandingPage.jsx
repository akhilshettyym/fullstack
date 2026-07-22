import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">POST & PLAY</h1>

          <p className="hero-subtitle">
            Share your moments, ideas, and creations.<br />
            Discover, connect, and play with a vibrant community.
          </p>

          <div className="hero-cta">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/create-post")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="wave-decoration"></div>
    </div>
  );
};

export default LandingPage;