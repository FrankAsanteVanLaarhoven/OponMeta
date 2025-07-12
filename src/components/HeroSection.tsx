import React from 'react';
import { Link } from 'react-router-dom';
import ActionButtons from './ActionButtons';

const HeroSection = () => (
  <section className="w-full bg-[#0a174e] text-white py-16 px-4 relative overflow-hidden">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <p className="uppercase tracking-widest text-indigo-200 mb-2 text-sm font-semibold">Empowering Global Learning</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Empowering Professionals Through Learning, Mentorship & Industry Collaboration</h1>
      <p className="text-lg md:text-xl mb-8 text-indigo-100">Stay competitive, future-ready, and equipped to lead in a rapidly evolving world.</p>
      <ActionButtons />
    </div>
    {/* Subtle background pattern/gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a174e] via-[#11235a] to-[#274690] opacity-60 z-0" />
    <div className="absolute -top-16 -right-16 w-72 h-72 bg-indigo-900 rounded-full opacity-20 z-0" />
    <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-indigo-700 rounded-full opacity-10 z-0" />
  </section>
);

export default HeroSection; 