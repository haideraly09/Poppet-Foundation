// hooks/useCounter.js
import { useState, useEffect } from 'react';

export const useCounter = (end, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);
  
  return count;
};