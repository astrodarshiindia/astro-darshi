'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

interface TarotCardProps {
  title: string;
  description: string;
  number: number;
  icon: string;
}

export default function TarotCard({ title, description, number, icon }: TarotCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-80 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full cosmic-border glass-effect p-6 rounded-lg flex flex-col items-center justify-center hover:border-primary transition-all"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-6xl mb-4">{icon}</div>
          <h3 className="text-xl font-serif text-primary text-center mb-2">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground text-center">
            Card {number}
          </p>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full cosmic-border glass-effect p-6 rounded-lg flex flex-col items-center justify-center bg-gradient-to-br from-secondary/20 to-accent/10"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="text-center">
            <h4 className="text-lg font-serif text-primary mb-3">Description</h4>
            <p className="text-sm text-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
