import React from 'react';

const Mentorship = () => (
  <div className="bg-[#f6f9fc] min-h-screen py-12 px-4">
    {/* Hero Section */}
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h1 className="text-4xl font-bold text-[#0a174e] mb-4">Unlock Your Potential with OponMeta Mentorship</h1>
      <p className="text-lg text-gray-700 mb-6">Connect with experienced professionals and industry leaders who are passionate about helping you grow. Our mentorship program is designed for students, early-career professionals, and anyone looking to pivot or advance.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#signup" className="px-8 py-3 bg-[#FFD700] text-[#0a174e] font-bold rounded-lg shadow hover:bg-yellow-300 transition">Become a Mentee</a>
        <a href="#signup" className="px-8 py-3 bg-white text-[#0a174e] font-bold rounded-lg border border-[#0a174e] hover:bg-gray-100 transition">Become a Mentor</a>
      </div>
    </div>

    {/* Value Proposition */}
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-[#0a174e] mb-2">Personalized Guidance</h3>
        <p className="text-gray-600">1:1 and group mentorship sessions tailored to your goals and interests.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-[#0a174e] mb-2">Career Planning</h3>
        <p className="text-gray-600">Get help with career planning, resume building, and interview preparation.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-[#0a174e] mb-2">Networking</h3>
        <p className="text-gray-600">Access exclusive events and connect with a global network of mentors and peers.</p>
      </div>
    </div>

    {/* Mentor/Mentee Sign Up */}
    <div id="signup" className="max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl font-bold text-[#0a174e] mb-4">Sign Up as a Mentor or Mentee</h2>
      <form className="bg-white rounded-lg shadow-md p-8 grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" />
          <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]">
            <option value="">I want to be a...</option>
            <option value="mentee">Mentee</option>
            <option value="mentor">Mentor</option>
          </select>
          <input type="text" placeholder="LinkedIn or Portfolio (optional)" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" />
        </div>
        <textarea placeholder="Tell us about your goals or expertise..." className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD700]" rows={3} />
        <button type="submit" className="w-full py-3 bg-[#0a174e] text-white font-semibold rounded-md hover:bg-[#11235a] transition-colors text-lg">Submit Application</button>
      </form>
    </div>

    {/* Profiles */}
    <div className="max-w-5xl mx-auto mb-16">
      <h2 className="text-2xl font-bold text-[#0a174e] mb-6 text-center">Featured Mentors</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mentor" className="w-20 h-20 rounded-full mx-auto mb-3" />
          <h4 className="font-semibold text-[#0a174e]">Alex Johnson</h4>
          <p className="text-gray-600 text-sm mb-2">AI & Data Science Lead</p>
          <p className="text-gray-500 text-xs">"Mentoring at OponMeta has been a rewarding experience. I love helping others grow!"</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Mentor" className="w-20 h-20 rounded-full mx-auto mb-3" />
          <h4 className="font-semibold text-[#0a174e]">Maria Rodriguez</h4>
          <p className="text-gray-600 text-sm mb-2">Full Stack Developer</p>
          <p className="text-gray-500 text-xs">"OponMeta's mentorship program is a game changer for career growth."</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Mentor" className="w-20 h-20 rounded-full mx-auto mb-3" />
          <h4 className="font-semibold text-[#0a174e]">Samuel Lee</h4>
          <p className="text-gray-600 text-sm mb-2">Product Manager</p>
          <p className="text-gray-500 text-xs">"I enjoy sharing my industry experience and learning from mentees too!"</p>
        </div>
      </div>
    </div>

    {/* Success Stories */}
    <div className="max-w-4xl mx-auto mb-8">
      <h2 className="text-2xl font-bold text-[#0a174e] mb-6 text-center">Success Stories</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-700 italic mb-2">“Thanks to my OponMeta mentor, I landed my dream job in tech. The guidance and support were invaluable!”</p>
        <div className="text-right text-sm text-gray-500">— Aisha, Mentee</div>
      </div>
    </div>
  </div>
);

export default Mentorship; 