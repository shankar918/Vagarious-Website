import { motion } from "framer-motion";

import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface Solution3DCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

export function Solution3DCard({ icon: Icon, title, description, gradient, index }: Solution3DCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 10 : 0,
          rotateX: isHovered ? -10 : 0,
          z: isHovered ? 50 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="relative h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300 rounded-3xl`}
          style={{ transform: 'translateZ(-20px)' }}
        />

        {/* Card */}
        <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden">
          {/* Animated background gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Icon container with 3D effect */}
            <motion.div
              animate={{
                rotateY: isHovered ? 360 : 0,
              }}
              transition={{ duration: 0.6 }}
              className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} mb-6 shadow-lg`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <Icon className="text-white" size={32} />
            </motion.div>

            <h3 className="text-white text-2xl mb-4">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>

            {/* Hover indicator */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '100%' : 0 }}
              transition={{ duration: 0.3 }}
              className={`h-1 bg-gradient-to-r ${gradient} rounded-full mt-6`}
            />

            {/* Floating particles */}
            {isHovered && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      y: [-20, -60],
                      x: Math.random() * 40 - 20,
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                    className={`absolute w-1 h-1 bg-gradient-to-br ${gradient} rounded-full`}
                    style={{
                      left: `${20 + i * 15}%`,
                      bottom: '20%',
                    }}
                  />
                ))}
              </>
            )}
          </div>

          {/* Corner accent */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 blur-3xl`} />
          <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${gradient} opacity-10 blur-3xl`} />
        </div>
      </motion.div>
    </motion.div>
  );
}
