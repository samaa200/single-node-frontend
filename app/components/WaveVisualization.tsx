'use client';

import { useEffect, useState } from 'react';

export default function WaveVisualization() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="relative h-[500px] mb-20 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent rounded-lg animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative h-[550px] mb-20 flex items-center justify-center">
      <svg 
        className="w-full h-full overflow-visible" 
        viewBox="0 0 1200 400" 
        preserveAspectRatio="none"
      >
        <defs>
          {/* Refined Gradient matching the image */}
          <linearGradient id="stripeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff8a05" stopOpacity="0" />
            <stop offset="15%" stopColor="#ff8a05" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#e32dd1" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#9a34ff" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>

          {/* Radial mask to create the clean fade-in/out effect on the sides */}
          <mask id="fadeMask">
            <rect x="0" y="0" width="1200" height="400" fill="url(#maskGradient)" />
          </mask>
          <linearGradient id="maskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="black" />
            <stop offset="20%" stopColor="white" />
            <stop offset="80%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
        </defs>

        <g mask="url(#fadeMask)">
          {[...Array(100)].map((_, i) => {
            // High density math: 
            // We vary the phase and amplitude slightly for every single line
            const amplitude = 50 + Math.sin(i * 0.2) * 40; 
            const frequency = 0.006 + (i * 0.00005);
            const phase = i * 0.15;
            const yOffset = 200;
            
            let d = `M 0 ${yOffset}`;
            for (let x = 0; x <= 1200; x += 20) {
              // Sine wave with a "pinch" effect in the middle
              const y = yOffset + Math.sin(x * frequency + phase) * amplitude;
              d += ` L ${x} ${y}`;
            }

            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="url(#stripeGradient)"
                strokeWidth="2"
                className="stripe-wave"
                style={{
                  opacity: 0.1 + (i % 10) * 0.05,
                  animationDelay: `${i * -150}ms`,
                  animationDuration: `${10 + (i % 5)}s`
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
