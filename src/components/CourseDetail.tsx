import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="mb-6">
        <Link 
          to="/programme" 
          className="inline-flex items-center text-[#0a174e] hover:text-[#FFD700] transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Courses
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0a174e] mb-4">Course Detail Page</h1>
          <p className="text-gray-600">Course ID: {id}</p>
          <p className="text-gray-500 mt-2">This is a placeholder for the course detail page. In a full implementation, this would show:</p>
          <ul className="text-left max-w-md mx-auto mt-4 text-gray-600 space-y-1">
            <li>• Detailed course information</li>
            <li>• Course curriculum and modules</li>
            <li>• Instructor profile</li>
            <li>• Student reviews and ratings</li>
            <li>• Enrollment options</li>
            <li>• Related courses</li>
          </ul>
        </div>
        
        <div className="text-center">
          <button className="px-8 py-3 bg-[#0a174e] text-white font-semibold rounded-lg hover:bg-[#1a2a6b] transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail; 