import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PhotoGallery = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:3000/photo/getevents");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setError(error);
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    ;fetchEvents()
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="photogallery-container">
      <h1 className="photogallery-title">Photo Gallery</h1>

      <div className="photogallery-grid">
        {events.map((event) => (
          <div
            key={event.id}
            className="photogallery-card"
            onClick={() => navigate(`/event/${event.id}`)}
          >
            <img
              src={`http://localhost:3000/uploads/photo-gallery/${event.thumbnail_url}`}
              alt={event.title}
              className="photogallery-image"
            />
            <p className="photo-caption">{event.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;