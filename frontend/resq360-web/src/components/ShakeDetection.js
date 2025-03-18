import React, { useEffect } from 'react';

const ShakeDetection = ({ onSOS }) => {
  useEffect(() => {
    const handleMotionEvent = (event) => {
      const { acceleration } = event;
      if (acceleration.x > 15 || acceleration.y > 15 || acceleration.z > 15) {
        onSOS();
      }
    };

    window.addEventListener('devicemotion', handleMotionEvent);

    return () => window.removeEventListener('devicemotion', handleMotionEvent);
  }, [onSOS]);

  return null;
};

export default ShakeDetection;