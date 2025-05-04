import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageModal from "./ImageModal";

const EventView = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const eventDetails = {
    1: {
      title: "Dr. Justice Bidyut Ranjan Sarangi Seminar",
      date: "12.03.2025",
      description:
        "A conference on Human Rights, Right to Skill, and Right to Employment was held in Karnataka, in collaboration with Kodagu University, Laghu Udhyog Bharathi.",
      images: ["/parliament.jpg", "/parliament2.jpg"],
    },

    2: {
      title: "Human Rights Conference in Karnataka",
      date: "12.03.2025",
      description:
        "A discussion on human rights and employment opportunities, featuring renowned legal experts and policymakers.",
      images: ["/parliament.jpg", "/parliament2.jpg"],
    },
  };

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:3000/photo/events/${eventId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch event details");
        }
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        setError(error);
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? event.images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === event.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-container">
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Gallery
      </button>
      <h2 className="event-heading">Event Details</h2>
      <div className="event-card">
        <p className="event-description">
          <strong>{event.title}</strong>
          <br />
          {event.description}
        </p>
        <p className="event-date">
          <em>Date: {event.date}</em>
        </p>
      </div>
      <div className="event-images">
        {event.images.map((img, index) => (
          <div className="image-container" key={index}>
            <img
              src={`http://localhost:3000${img}`}
              alt={`Event image ${index + 1}`}
              onClick={() => openModal(index)}
              className="clickable-image"
            />
            <span className="image-caption">Event image {index + 1}</span>
          </div>
        ))}
      </div>

      {modalOpen && (
        <ImageModal
          images={event.images}
          currentIndex={currentIndex}
          closeModal={closeModal}
          prevImage={prevImage}
          nextImage={nextImage}
        />
      )}
    </div>
  );
};

export default EventView;
