import React from 'react';

const Workshop = () => (
  <div className="bg-[#f6f9fc] min-h-screen py-12 px-4">
    {/* Hero Section */}
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h1 className="text-4xl font-bold text-[#0a174e] mb-4">Hands-On Workshops for Real-World Skills</h1>
      <p className="text-lg text-gray-700 mb-6">Join live, interactive sessions led by industry experts. Our workshops are designed to give you practical, actionable skills in a collaborative environment.</p>
      <a href="#register" className="px-8 py-3 bg-[#FFD700] text-[#0a174e] font-bold rounded-lg shadow hover:bg-yellow-300 transition">Browse Upcoming Events</a>
    </div>

    {/* Value Proposition */}
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-[#0a174e] mb-2">Project-Based Learning</h3>
        <p className="text-gray-600">Work on real-world projects and build your portfolio with hands-on labs.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-[#0a174e] mb-2">Expert Instructors</h3>
        <p className="text-gray-600">Learn from top professionals in AI, Web Development, Data Science, Leadership, and more.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-[#0a174e] mb-2">Certificates of Completion</h3>
        <p className="text-gray-600">Earn certificates to showcase your new skills and boost your resume.</p>
      </div>
    </div>

    {/* Upcoming Events */}
    <div className="max-w-5xl mx-auto mb-16">
      <h2 className="text-2xl font-bold text-[#0a174e] mb-6 text-center">Upcoming Events</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold text-[#0a174e] mb-1">AI for Everyone</h4>
          <p className="text-gray-600 mb-2">April 20, 2025 &middot; Online</p>
          <p className="text-gray-500 text-sm mb-4">A beginner-friendly workshop on the basics of artificial intelligence and its real-world applications.</p>
          <a href="#register" className="text-[#0a174e] font-semibold hover:underline">Register</a>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="font-semibold text-[#0a174e] mb-1">Full Stack Web Bootcamp</h4>
          <p className="text-gray-600 mb-2">May 5, 2025 &middot; Hybrid</p>
          <p className="text-gray-500 text-sm mb-4">Build and deploy a web app from scratch in this intensive, hands-on lab.</p>
          <a href="#register" className="text-[#0a174e] font-semibold hover:underline">Register</a>
        </div>
      </div>
    </div>

    {/* Hands-on Lab */}
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-2xl font-bold text-[#0a174e] mb-6 text-center">Hands-on Lab Experience</h2>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <p className="text-gray-700 mb-4">Our labs are designed to simulate real industry challenges. Collaborate with peers, solve problems, and gain confidence in your skills.</p>
        <a href="#register" className="px-8 py-3 bg-[#0a174e] text-white font-bold rounded-lg hover:bg-[#11235a] transition">Join a Lab</a>
      </div>
    </div>

    {/* Registration */}
    <div id="register" className="max-w-3xl mx-auto mb-8">
      <h2 className="text-2xl font-bold text-[#0a174e] mb-4">Register for a Workshop</h2>
      <form className="bg-white rounded-lg shadow-md p-8 grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" />
          <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" />
        </div>
        <input type="text" placeholder="Workshop Name" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" />
        <button type="submit" className="w-full py-3 bg-[#0a174e] text-white font-semibold rounded-md hover:bg-[#11235a] transition-colors text-lg">Register</button>
      </form>
    </div>
  </div>
);

export default Workshop; 