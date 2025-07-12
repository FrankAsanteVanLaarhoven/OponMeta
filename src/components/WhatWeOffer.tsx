import React from 'react';
import { BookOpen, Users, Briefcase } from 'lucide-react';

const offers = [
  {
    icon: <BookOpen className="h-10 w-10 text-indigo-400 mb-2" />,
    title: 'Digital Learning',
    desc: 'Self-paced courses, certifications',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-indigo-400 mb-2" />,
    title: 'Practical Workshops',
    desc: 'Hands-on Labs, Live Sessions',
  },
  {
    icon: <Users className="h-10 w-10 text-indigo-400 mb-2" />,
    title: 'Mentorship & Industry Access',
    desc: '1 on 1 Mentorship, job pipelines',
  },
];

const WhatWeOffer = () => (
  <section className="w-full bg-white py-12 px-4 border-b border-gray-100">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0a174e] mb-2">What We Offer</h2>
      <div className="w-16 h-1 bg-indigo-400 mx-auto mb-8 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            {item.icon}
            <h3 className="text-xl font-semibold text-[#0a174e] mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOffer; 