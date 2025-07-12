import React from 'react';

const Partners = () => (
  <div className="bg-[#f6f9fc] min-h-screen py-12 px-4">
    {/* Hero Section */}
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h1 className="text-4xl font-bold text-[#0a174e] mb-4">Our Partners: Building the Future of Learning Together</h1>
      <p className="text-lg text-gray-700 mb-6">OponMeta collaborates with leading organizations, universities, and industry partners to deliver world-class education and opportunities.</p>
      <a href="#contact" className="px-8 py-3 bg-[#FFD700] text-[#0a174e] font-bold rounded-lg shadow hover:bg-yellow-300 transition">Contact Our Partnerships Team</a>
    </div>

    {/* Value Proposition */}
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-[#0a174e] mb-2">Industry Collaborations</h3>
        <p className="text-gray-600">Partner with us to shape the future of work and learning through joint programs and research.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-[#0a174e] mb-2">Internship Pipelines</h3>
        <p className="text-gray-600">Connect with top talent through our internship and job placement programs.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-[#0a174e] mb-2">Innovation Labs</h3>
        <p className="text-gray-600">Collaborate on cutting-edge projects in our innovation labs and advisory boards.</p>
      </div>
    </div>

    {/* Contact Section */}
    <div id="contact" className="max-w-3xl mx-auto mb-8">
      <h2 className="text-2xl font-bold text-[#0a174e] mb-4">Partner With OponMeta</h2>
      <form className="bg-white rounded-lg shadow-md p-8 grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Organization Name" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" />
          <input type="email" placeholder="Contact Email" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" />
        </div>
        <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" />
        <textarea placeholder="How would you like to collaborate?" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" rows={3} />
        <button type="submit" className="w-full py-3 bg-[#0a174e] text-white font-semibold rounded-md hover:bg-[#11235a] transition-colors text-lg">Submit Inquiry</button>
      </form>
    </div>
  </div>
);

export default Partners; 