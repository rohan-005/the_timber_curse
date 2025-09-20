'use client';

import { useMousePosition } from '@/hooks/useMousePosition';

export default function FloatingGhosts() {
  const { x, y } = useMousePosition();
  
  return (
    <>
      {/* Ghost elements that follow cursor */}
      <div 
        className="fixed z-10 pointer-events-none opacity-30"
        style={{ 
          left: x - 40, 
          top: y - 40,
          transition: 'left 0.5s ease-out, top 0.5s ease-out'
        }}
      >
        <div className="animate-spooky-float text-4xl">👻</div>
      </div>
      
      {/* Random floating elements */}
      <div className="fixed left-1/4 top-1/4 animate-float text-3xl opacity-20">👻</div>
      <div className="fixed left-3/4 top-1/3 animate-float text-2xl opacity-15" style={{ animationDelay: '2s' }}>👻</div>
      <div className="fixed left-1/3 top-3/4 animate-float text-5xl opacity-10" style={{ animationDelay: '4s' }}>👻</div>
    </>
  );
}