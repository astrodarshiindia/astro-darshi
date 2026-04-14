'use client';

import React from 'react';

const zodiacSigns = [
  { name: 'Aries', symbol: '♈', angle: 0 },
  { name: 'Taurus', symbol: '♉', angle: 30 },
  { name: 'Gemini', symbol: '♊', angle: 60 },
  { name: 'Cancer', symbol: '♋', angle: 90 },
  { name: 'Leo', symbol: '♌', angle: 120 },
  { name: 'Virgo', symbol: '♍', angle: 150 },
  { name: 'Libra', symbol: '♎', angle: 180 },
  { name: 'Scorpio', symbol: '♏', angle: 210 },
  { name: 'Sagittarius', symbol: '♐', angle: 240 },
  { name: 'Capricorn', symbol: '♑', angle: 270 },
  { name: 'Aquarius', symbol: '♒', angle: 300 },
  { name: 'Pisces', symbol: '♓', angle: 330 },
];

export default function ZodiacWheel() {
  return (
    <div className="flex justify-center items-center relative w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 400 400" className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Outer ring */}
        <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" opacity="0.8" />
        <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" className="text-secondary" strokeWidth="1" opacity="0.4" />

        {/* Inner rings */}
        <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" className="text-accent" strokeWidth="1" opacity="0.5" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" className="text-chart-5" strokeWidth="1.5" opacity="0.6" />

        {/* Zodiac dividers */}
        {zodiacSigns.map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = (200 + 100 * Math.cos(angle)).toFixed(4);
          const y1 = (200 + 100 * Math.sin(angle)).toFixed(4);
          const x2 = (200 + 190 * Math.cos(angle)).toFixed(4);
          const y2 = (200 + 190 * Math.sin(angle)).toFixed(4);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              className="text-primary"
              strokeWidth="1"
              opacity="0.5"
            />
          );
        })}


        {/* Zodiac signs */}
        {zodiacSigns.map((sign) => {
          const angle = (sign.angle * Math.PI) / 180;
          const x = (200 + 155 * Math.cos(angle)).toFixed(4);
          const y = (200 + 155 * Math.sin(angle)).toFixed(4);

          return (
            <g key={sign.name}>
              <circle cx={x} cy={y} r="12" fill="currentColor" className="text-primary" opacity="0.7" />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fontSize="16"
                fontWeight="bold"
                fill="currentColor"
                className="text-primary-foreground font-serif"
              >
                {sign.symbol}
              </text>
            </g>
          );
        })}


        {/* Center circle - Om symbol representation */}
        <circle cx="200" cy="200" r="25" fill="currentColor" className="text-primary" opacity="0.3" />
        <text
          x="200"
          y="210"
          textAnchor="middle"
          fontSize="24"
          fill="currentColor"
          className="text-primary"
          opacity="0.8"
        >
          ॐ
        </text>
      </svg>
    </div>
  );
}
