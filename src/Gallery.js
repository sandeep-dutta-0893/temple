import React from 'react';


function Gallery() {
    return (
      <div className="home-container">
        <div className="card1">
            <div className="title">Gallery</div>
            <div className="card-grid1">
                change event cards style
          <div className="event-card" style={{ backgroundColor: '#F9E076' }}>Event 1</div>
          <div className="event-card" style={{ backgroundColor: '#F5EB9A' }}>Event 2</div>
          <div className="event-card" style={{ backgroundColor: '#F5EB9A' }}>Event 3</div>
          <div className="event-card" style={{ backgroundColor: '#F9E076' }}>Event 4</div>
          <div className="event-card" style={{ backgroundColor: '#F9E076' }}>Event 5</div>
          <div className="event-card" style={{ backgroundColor: '#F5EB9A' }}>Event 6</div>
        </div>
      {/* Add page content */}
      </div>
    </div>
  );
};

export default Gallery;