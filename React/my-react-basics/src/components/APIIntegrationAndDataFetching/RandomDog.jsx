import { useState, useEffect } from "react";
import "./API.css";

function RandomDog() {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchDog() {
    setLoading(true);
    setError(null);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="random-dog">
      <h2>🐕 Random Dog Pictures</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {dogImage && !loading && (
        <img src={dogImage} alt="Random dog" className="dog-image" />
      )}

      <button onClick={fetchDog} disabled={loading}>
        {loading ? "Loading..." : "Get New Dog!"}
      </button>
    </div>
  );
}

export default RandomDog;
