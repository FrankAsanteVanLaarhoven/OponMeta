import React from 'react';

const PostPricingCTA = () => (
  <div className="w-full flex flex-col items-center justify-center py-12 bg-gradient-to-r from-[#0a174e] to-[#1a2a6b] mt-8">
    <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4 drop-shadow-lg text-center">
      Ready to Unlock Your Potential?
    </h2>
    <p className="text-lg text-white mb-6 text-center max-w-2xl">
      Join OponMeta today and access world-class courses, mentorship, and a global learning community—all at flexible, affordable prices.
    </p>
    <a
      href="/join"
      className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xl font-bold rounded-2xl shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200"
    >
      Start Learning Now
    </a>
  </div>
);

export default PostPricingCTA; 