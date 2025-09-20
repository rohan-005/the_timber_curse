'use client';

import { cursedItems } from '@/data/gameData';
import { motion } from 'framer-motion';

export default function CursedItems() {
  return (
    <div className="my-20">
      <h3 className="font-horror text-3xl md:text-4xl text-blue-600 text-center mb-12 animate-glow">
        THE SEVEN CURSED ITEMS
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {cursedItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative group bg-dark-bg/60 backdrop-blur-md border border-blood-red/40 rounded-2xl p-6 shadow-lg
                       transition-all duration-500 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated glowing border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                            group-hover:border-blood-red/70 transition-all duration-300"></div>

            {/* Item Symbol */}
            <div className="text-center mb-4">
              {/* <div className="inline-flex items-center justify-center w-14 h-14 rounded-full 
                              bg-gradient-to-br from-blood-red/80 to-black text-xl shadow-md
                              group-hover:scale-110 transition-transform duration-300">
                {item.id}
              </div> */}
            </div>
            
            {/* Title */}
            <h4 className="font-horror text-red-400 text-center mb-4 text-xl md:text-2xl">
              {item.name}
            </h4>

            {/* Description with reveal effect */}
            <p className="text-sm text-gray-300 text-center mb-4" >
              {item.description}
            </p>
            
            {/* Timeline + Guardian */}
            <div className="text-xs text-gray-400 text-center space-y-1 opacity-80">
              <div>⏳ Timeline: <span className="text-gray-200">{item.timeline}</span></div>
              <div>👁 Guardian: <span className="text-gray-200">{item.guardian}</span></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
