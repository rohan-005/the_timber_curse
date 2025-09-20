'use client';

import { useEffect, useRef } from 'react';
import DownloadButton from './DownloadButton';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays correctly
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="/videos/ttc_thumbnail.png"
        >
          <source src="/videos/ttc_intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        <div className="absolute inset-0 bg-radial-at-center from-blood-red/10 to-transparent opacity-30"></div>
      </div>

      {/* Animated Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          className="font-creepy text-5xl md:text-7xl lg:text-8xl mb-4 text-blood-red drop-shadow-md text-red-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          THE TIMBER CURSE
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto animate-flicker mt-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A horror mystery set in the cursed forests of the 1700s
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <DownloadButton />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-blood-red rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-blood-red rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}