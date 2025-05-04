import React from 'react';
import News from './News/News';
import Gallery from './Gallery/Gallery';

const LatestEvents = () => {
  return (
    <div className="latest-events-container">
      <div className="latest-events-container-header2">Latest Events</div>
      <div className="content-wrapper">
        <div className="news-section">
          <News />
        </div>
        <div className="gallery-section">
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default LatestEvents;
