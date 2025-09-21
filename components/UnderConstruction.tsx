// components/UnderConstruction.js
'use client'
import { useState, useEffect } from 'react';
import { Hammer, Clock, Skull, Eye, EyeOff } from 'lucide-react';

export default function UnderConstruction() {
  const [isVisible, setIsVisible] = useState(true);
  const [glitchEffect, setGlitchEffect] = useState(false);

  // Add occasional glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 100);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="relative max-w-md mx-4 p-6 border-2 border-blood rounded-lg bg-dark-200 shadow-xl">
        {/* Glitch effect overlay */}
        {glitchEffect && (
          <div className="absolute inset-0 bg-blood opacity-20 mix-blend-overlay animate-pulse"></div>
        )}
        
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-parchment hover:text-blood transition-colors"
          aria-label="Close"
        >
          <EyeOff size={20} />
        </button>
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Hammer size={40} className="text-blood" />
              <Skull size={20} className="absolute -top-2 -right-2 text-blood" />
            </div>
          </div>
          <h2 className="text-2xl font-horror text-blood mb-2">Under Construction</h2>
          <p className="text-parchment">The game is under maintenance</p>
        </div>
        
        {/* Animated progress bar */}
        <div className="w-full bg-dark-300 rounded-full h-2.5 mb-6">
          <div 
            className="bg-blood h-2.5 rounded-full animate-pulse-glow"
            style={{ width: '73%' }}
          ></div>
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-start">
            <Clock size={20} className="text-blood mr-3 mt-1 flex-shrink-0" />
            <p className="text-parchment">We&apos;re working hard to complete this section. Please check back soon!</p>
          </div>
          
          <div className="flex items-start">
            <Eye size={20} className="text-blood mr-3 mt-1 flex-shrink-0" />
            <p className="text-parchment">Something mysterious is being prepared behind the scenes...</p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-blood border-opacity-30 text-center">
          <p className="text-sm text-parchment text-opacity-70">
            The Timber Curse • Coming Soon
          </p>
        </div>
      </div>
    </div>
  );

}
