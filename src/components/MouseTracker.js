import React, { useState, useEffect } from 'react';

function MouseTracker({ render }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div style={{ height: '100vh' }}>
      {render(mousePosition)}
    </div>
  );
}

export default MouseTracker;

