import React from 'react';
import { Star, Clock, Users, BookOpen, Play } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  duration: string;
  students: number;
  lessons: number;
  image: string;
  level: string;
  category: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  rating,
  reviewCount,
  price,
  originalPrice,
  duration,
  students,
  lessons,
  image,
  level,
  category,
  isBestseller,
  isNew
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      {/* Course Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          {isBestseller && (
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
              Bestseller
            </span>
          )}
          {isNew && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              New
            </span>
          )}
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {duration}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4">
        {/* Category and Level */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {level}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-gray-600 mb-3">by {instructor}</p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-900 mr-1">{rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-1">({reviewCount.toLocaleString()})</span>
          </div>
        </div>

        {/* Course Stats */}
        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {students.toLocaleString()} students
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            {lessons} lessons
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-lg font-bold text-gray-900">${price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">${originalPrice}</span>
            )}
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;