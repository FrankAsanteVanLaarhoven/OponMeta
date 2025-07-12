import React from 'react';

const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    progress: 75,
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    certificate: false,
  },
  {
    id: 2,
    title: 'AI for Beginners',
    progress: 100,
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    certificate: true,
  },
  {
    id: 3,
    title: 'Digital Marketing Mastery',
    progress: 40,
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    certificate: false,
  },
];

const events = [
  {
    id: 1,
    title: 'Live Workshop: Building Your Portfolio',
    date: 'May 10, 2025',
    time: '4:00 PM GMT',
    link: '#',
  },
  {
    id: 2,
    title: 'Mentor Q&A Session',
    date: 'May 15, 2025',
    time: '6:00 PM GMT',
    link: '#',
  },
];

const StudentDashboard = () => (
  <div className="bg-[#f6f9fc] min-h-screen py-12 px-4">
    {/* Welcome Section */}
    <div className="max-w-5xl mx-auto mb-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
      <div className="flex items-center gap-4">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" className="w-20 h-20 rounded-full border-4 border-[#FFD700]" />
        <div>
          <h1 className="text-3xl font-bold text-[#0a174e]">Welcome back, Alex!</h1>
          <p className="text-gray-600 mt-1">Your learning journey continues. Let’s achieve your goals!</p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-[#0a174e] text-white rounded-lg font-semibold hover:bg-[#11235a] transition">Profile Settings</button>
        <button className="px-6 py-2 bg-white text-[#0a174e] border border-[#0a174e] rounded-lg font-semibold hover:bg-gray-100 transition">Log Out</button>
      </div>
    </div>

    {/* My Courses */}
    <div className="max-w-5xl mx-auto mb-12">
      <h2 className="text-2xl font-bold text-[#0a174e] mb-6">My Courses</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded mb-3" />
            <h3 className="font-semibold text-[#0a174e] text-lg mb-1">{course.title}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-bold rounded px-2 py-1 ${course.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'}`}>{course.status}</span>
              {course.certificate && (
                <a href="#" className="text-[#FFD700] text-xs font-semibold underline ml-2">Download Certificate</a>
              )}
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-[#FFD700] h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Progress: {course.progress}%</span>
                <button className="px-4 py-1 bg-[#0a174e] text-white rounded text-xs font-semibold hover:bg-[#11235a] transition">{course.status === 'Completed' ? 'Review' : 'Resume'}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Upcoming Events */}
    <div className="max-w-5xl mx-auto mb-12">
      <h2 className="text-2xl font-bold text-[#0a174e] mb-6">Upcoming Events & Workshops</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
            <div>
              <h4 className="font-semibold text-[#0a174e] mb-1">{event.title}</h4>
              <p className="text-gray-600 mb-2">{event.date} &middot; {event.time}</p>
            </div>
            <a href={event.link} className="mt-4 px-6 py-2 bg-[#FFD700] text-[#0a174e] font-bold rounded-lg shadow hover:bg-yellow-300 transition text-center">Join Event</a>
          </div>
        ))}
      </div>
    </div>

    {/* Certificates */}
    <div className="max-w-5xl mx-auto mb-12">
      <h2 className="text-2xl font-bold text-[#0a174e] mb-6">Certificates</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.filter(c => c.certificate).length === 0 ? (
          <div className="col-span-3 text-center text-gray-500">No certificates yet. Complete a course to earn your first certificate!</div>
        ) : (
          courses.filter(c => c.certificate).map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={course.image} alt={course.title} className="w-16 h-16 object-cover rounded mb-2" />
              <h4 className="font-semibold text-[#0a174e] mb-1 text-center">{course.title}</h4>
              <a href="#" className="mt-2 px-4 py-2 bg-[#FFD700] text-[#0a174e] font-bold rounded shadow hover:bg-yellow-300 transition text-sm">Download Certificate</a>
            </div>
          ))
        )}
      </div>
    </div>

    {/* Account Actions */}
    <div className="max-w-5xl mx-auto mb-8">
      <h2 className="text-2xl font-bold text-[#0a174e] mb-6">Account & Support</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h4 className="font-semibold text-[#0a174e] mb-2">Profile Settings</h4>
          <p className="text-gray-600 mb-4">Update your personal info, avatar, and password.</p>
          <a href="#" className="text-[#0a174e] font-semibold hover:underline">Edit Profile</a>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h4 className="font-semibold text-[#0a174e] mb-2">Billing & Subscriptions</h4>
          <p className="text-gray-600 mb-4">Manage your payment methods and subscription plans.</p>
          <a href="#" className="text-[#0a174e] font-semibold hover:underline">Manage Billing</a>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h4 className="font-semibold text-[#0a174e] mb-2">Support</h4>
          <p className="text-gray-600 mb-4">Need help? Contact our support team or visit the help center.</p>
          <a href="#" className="text-[#0a174e] font-semibold hover:underline">Get Support</a>
        </div>
      </div>
    </div>
  </div>
);

export default StudentDashboard; 