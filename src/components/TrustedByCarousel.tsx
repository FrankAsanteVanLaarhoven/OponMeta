import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const logos = [
  '/logo.png',
  '/oponmeta-logo .png',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2e/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Unilever.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6e/World_Bank_logo.svg',
];

// Duplicate the logos for seamless infinite scroll
const repeatedLogos = [...logos, ...logos];

const TrustedByCarousel = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#0a174e] to-[#1a2a6b] py-8 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow">Trusted By</h2>
      <div className="overflow-hidden w-full max-w-5xl relative">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 18,
              ease: 'linear',
            },
          }}
          style={{ width: 'max-content' }}
        >
          {repeatedLogos.map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center justify-center h-16 w-32 bg-white rounded-xl shadow border-2 border-yellow-400 p-2">
              <img src={logo} alt="Trusted logo" className="h-10 object-contain mx-auto" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedByCarousel; 