'use client';

import { motion } from 'framer-motion';

const cursedTimelines = [
  {
    id: 'past',
    name: 'The Forsaken Past',
    description:
      'Centuries ago, the entity sowed his first curse across the land, binding his soul into relics of war, betrayal, and forbidden rituals. These artifacts whisper with echoes of vengeance.',
    items: 3,
    color: 'bg-red-900/40',
  },
  {
    id: 'present',
    name: 'The Tormented Present',
    description:
      'Now, the curse bleeds into reality. The entity’s soul feeds on fear, hiding within objects that infect the living. The player, trapped in this cycle, feels the curse clawing at their mind.',
    items: 3,
    color: 'bg-purple-900/40',
  },
  {
    id: 'future',
    name: 'The Doomed Future',
    description:
      'If the entity’s final fragments remain unbroken, the future is sealed. His cursed soul will awaken, consuming all time and bending existence to his will.',
    items: 3,
    color: 'bg-blue-900/40',
  },
];

export default function InteractiveTimeline() {
  return (
    <div className="my-16">
      <h3 className="font-horror text-2xl md:text-3xl text-blood-red text-center mb-8 animate-glow">
        THE THREE CURSED TIMELINES
      </h3>

      <div className="relative">
        {/* Central timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blood-red opacity-50"></div>

        <div className="space-y-12 md:space-y-24">
          {cursedTimelines.map((timeline, index) => (
            <motion.div
              key={timeline.id}
              className={`relative flex flex-col md:flex-row items-center justify-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              {/* Timeline point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-dark-bg border-2 border-blood-red z-10 shadow-lg shadow-red-900/50"></div>

              {/* Timeline card */}
              <div
                className={`w-full md:w-5/12 p-6 rounded-lg border-2 border-gray-700 ${timeline.color} backdrop-blur-sm transition-transform transform hover:scale-105 duration-300 ml-0 md:${
                  index % 2 === 0 ? 'ml-12' : 'mr-12'
                } mt-8 md:mt-0`}
              >
                <h4 className="font-horror text-xl md:text-2xl text-blood-red mb-3">
                  {timeline.name}
                </h4>
                <p className="text-sm md:text-base leading-relaxed">
                  {timeline.description}
                </p>
                <div className="mt-4 text-sm text-gray-400 italic">
                  Holds {timeline.items} cursed fragment
                  {timeline.items !== 1 ? 's' : ''} of the soul
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Player’s position (stuck in between timelines) */}
      <div className="mt-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="inline-block px-6 py-3 border-2 border-blood-red rounded-lg bg-dark-bg/80 shadow-lg shadow-red-900/40"
        >
          <h4 className="font-horror text-xl md:text-2xl text-blood-red mb-2">
            YOU ARE TRAPPED
          </h4>
          <p className="text-gray-300 text-sm md:text-base max-w-md">
            Between Past, Present, and Future… you must uncover the cursed items
            to free yourself, or remain bound within the entity’s eternal cycle.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
