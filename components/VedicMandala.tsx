'use client';

import React, { useEffect, useState } from 'react';

export default function VedicMandala() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        className="drop-shadow-lg"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Outer circle */}
        <circle
          cx="150"
          cy="150"
          r="140"
          fill="none"
          stroke="currentColor"
          className="text-primary"
          strokeWidth="2"
          opacity="0.8"
        />
        <circle
          cx="150"
          cy="150"
          r="135"
          fill="none"
          stroke="currentColor"
          className="text-secondary"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Petals */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          const rad = (angle * Math.PI) / 180;
          const x1 = 150 + 100 * Math.cos(rad);
          const y1 = 150 + 100 * Math.sin(rad);
          const x2 = 150 + 130 * Math.cos(rad);
          const y2 = 150 + 130 * Math.sin(rad);

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              className="text-chart-5"
              strokeWidth="1.5"
              opacity="0.6"
            />
          );
        })}

        {/* Inner circles - chakra representation */}
        <circle
          cx="150"
          cy="150"
          r="80"
          fill="none"
          stroke="currentColor"
          className="text-accent"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <circle
          cx="150"
          cy="150"
          r="50"
          fill="none"
          stroke="currentColor"
          className="text-primary"
          strokeWidth="2"
          opacity="0.8"
        />
        <circle
          cx="150"
          cy="150"
          r="30"
          fill="currentColor"
          className="text-primary"
          opacity="0.3"
        />

        {/* Center point */}
        <circle
          cx="150"
          cy="150"
          r="8"
          fill="currentColor"
          className="text-primary"
          opacity="0.9"
        />

        {/* Triangles for vedic geometry */}
        {Array.from({ length: 4 }).map((_, i) => {
          const baseAngle = (i * 90) - 45;
          const angle = (baseAngle * Math.PI) / 180;
          const x = 150 + 65 * Math.cos(angle);
          const y = 150 + 65 * Math.sin(angle);

          const angle2 = ((baseAngle + 90) * Math.PI) / 180;
          const x2 = 150 + 65 * Math.cos(angle2);
          const y2 = 150 + 65 * Math.sin(angle2);

          const angle3 = ((baseAngle + 180) * Math.PI) / 180;
          const x3 = 150 + 65 * Math.cos(angle3);
          const y3 = 150 + 65 * Math.sin(angle3);

          return (
            <polygon
              key={i}
              points={`${x},${y} ${x2},${y2} ${x3},${y3}`}
              fill="none"
              stroke="currentColor"
              className="text-secondary"
              strokeWidth="1"
              opacity="0.5"
            />
          );
        })}
      </svg>
    </div>
  );
}
