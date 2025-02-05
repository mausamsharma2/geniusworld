import React, { useState, useEffect } from "react";
import "./Newsticker.css";

const newsItems = [
  "🔥 National Test Scores Show Improvement in Math and Reading",
  "🚀 Schools Across the U.S. Implement New Mental Health Programs",
  "📢 Back-to-School Season: Supply Shortages Affect Classrooms",
  "💡 Local High School Wins State Robotics Championship",
];

function NewsTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news-section">
      <div className="news-ticker">
        <p key={index}>{newsItems[index]}</p>
      </div>
    </div>
  );
}

export default NewsTicker;
