import React, { useState } from 'react';
import { Filter, Grid, List, SlidersHorizontal, ChevronDown } from 'lucide-react';
import FilterSidebar from './FilterSidebar';
import CourseCard from './CourseCard';

const CourseCatalog = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const courses = [
    {
      id: '1',
      title: 'Complete React Developer Course with Redux, Hooks, and GraphQL',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      reviewCount: 12543,
      price: 89.99,
      originalPrice: 199.99,
      duration: '42h 30m',
      students: 45678,
      lessons: 156,
      level: 'Intermediate',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      isBestseller: true
    },
    {
      id: '2',
      title: 'Python for Data Science and Machine Learning Bootcamp',
      instructor: 'Dr. Michael Chen',
      rating: 4.7,
      reviewCount: 8932,
      price: 79.99,
      originalPrice: 149.99,
      duration: '38h 15m',
      students: 32145,
      lessons: 142,
      level: 'Beginner',
      category: 'Data Science',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      isNew: true
    },
    {
      id: '3',
      title: 'UI/UX Design Fundamentals: From Wireframes to Prototypes',
      instructor: 'Emma Wilson',
      rating: 4.9,
      reviewCount: 6754,
      price: 69.99,
      duration: '28h 45m',
      students: 18923,
      lessons: 98,
      level: 'Beginner',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      isBestseller: true
    },
    {
      id: '4',
      title: 'Advanced JavaScript: Async/Await, Promises, and Modern ES6+',
      instructor: 'Alex Rodriguez',
      rating: 4.6,
      reviewCount: 4321,
      price: 59.99,
      originalPrice: 119.99,
      duration: '24h 20m',
      students: 15678,
      lessons: 87,
      level: 'Advanced',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: '5',
      title: 'Digital Marketing Masterclass: SEO, Social Media & Analytics',
      instructor: 'Jennifer Lee',
      rating: 4.5,
      reviewCount: 9876,
      price: 49.99,
      duration: '32h 10m',
      students: 28456,
      lessons: 124,
      level: 'Intermediate',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      isNew: true
    },
    {
      id: '6',
      title: 'Mobile App Development with React Native',
      instructor: 'David Kim',
      rating: 4.7,
      reviewCount: 5432,
      price: 94.99,
      originalPrice: 179.99,
      duration: '45h 30m',
      students: 12345,
      lessons: 178,
      level: 'Intermediate',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    // --- OponMeta Cleaning & Sanitation Courses ---
    {
      id: '101',
      title: 'Infection Control and Cleaning Protocols in Hospitals',
      instructor: 'OponMeta Faculty',
      rating: 4.8,
      reviewCount: 1200,
      price: 49.99,
      duration: '8h',
      students: 3500,
      lessons: 12,
      level: 'Beginner',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/3845125/pexels-photo-3845125.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Master infection control principles and hospital cleaning protocols for high-risk areas.'
    },
    {
      id: '102',
      title: 'Industrial Cleaning and Safety Protocols',
      instructor: 'OponMeta Faculty',
      rating: 4.7,
      reviewCount: 950,
      price: 44.99,
      duration: '7h',
      students: 2100,
      lessons: 10,
      level: 'Beginner',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Learn industrial cleaning requirements, safety protocols, and effective cleaning methods.'
    },
    {
      id: '103',
      title: 'Effective Cleaning Techniques for Homes and Commercial Premises',
      instructor: 'OponMeta Faculty',
      rating: 4.6,
      reviewCount: 800,
      price: 39.99,
      duration: '6h',
      students: 1800,
      lessons: 9,
      level: 'Beginner',
      category: 'General',
      image: 'https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Understand cleaning requirements and techniques for homes and commercial spaces.'
    },
    {
      id: '104',
      title: 'Cleaning and Sanitizing Mobile Premises',
      instructor: 'OponMeta Faculty',
      rating: 4.7,
      reviewCount: 700,
      price: 34.99,
      duration: '5h',
      students: 1200,
      lessons: 8,
      level: 'Beginner',
      category: 'Transport',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Learn cleaning and sanitizing techniques for vehicles, buses, and trains.'
    },
    {
      id: '105',
      title: 'Conducting Sanitary Inspections',
      instructor: 'OponMeta Faculty',
      rating: 4.8,
      reviewCount: 650,
      price: 54.99,
      duration: '7h',
      students: 900,
      lessons: 11,
      level: 'Intermediate',
      category: 'Public Health',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Master sanitary inspection procedures and health hazard identification.'
    },
    {
      id: '106',
      title: 'Aircraft Cleaning and Sanitizing',
      instructor: 'OponMeta Faculty',
      rating: 4.7,
      reviewCount: 500,
      price: 59.99,
      duration: '6h',
      students: 800,
      lessons: 10,
      level: 'Intermediate',
      category: 'Aviation',
      image: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Understand aircraft cleaning procedures, techniques, and safety regulations.'
    },
    {
      id: '107',
      title: 'Airport Terminal Cleaning and Maintenance',
      instructor: 'OponMeta Faculty',
      rating: 4.6,
      reviewCount: 480,
      price: 49.99,
      duration: '6h',
      students: 700,
      lessons: 9,
      level: 'Intermediate',
      category: 'Aviation',
      image: 'https://images.pexels.com/photos/325812/pexels-photo-325812.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Learn cleaning protocols and maintenance for airport terminals and high-traffic areas.'
    },
    {
      id: '108',
      title: 'Ship and Port Facility Cleaning and Maintenance',
      instructor: 'OponMeta Faculty',
      rating: 4.7,
      reviewCount: 420,
      price: 54.99,
      duration: '7h',
      students: 600,
      lessons: 10,
      level: 'Intermediate',
      category: 'Maritime',
      image: 'https://images.pexels.com/photos/425416/pexels-photo-425416.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Understand cleaning protocols and safety for ships and port facilities.'
    },
    {
      id: '109',
      title: 'Airport and Aircraft Cleaning Operations',
      instructor: 'OponMeta Faculty',
      rating: 4.8,
      reviewCount: 390,
      price: 59.99,
      duration: '8h',
      students: 500,
      lessons: 12,
      level: 'Intermediate',
      category: 'Aviation',
      image: 'https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Master cleaning protocols for both airport facilities and aircraft.'
    },
    {
      id: '110',
      title: 'Waste Reporting and Circular Economy Principles',
      instructor: 'OponMeta Faculty',
      rating: 4.7,
      reviewCount: 370,
      price: 39.99,
      duration: '5h',
      students: 400,
      lessons: 8,
      level: 'Beginner',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Learn waste reporting, circular economy principles, and sustainability strategies.'
    },
    {
      id: '111',
      title: 'School Sanitation, Hygiene, and Safety (SSHS)',
      instructor: 'OponMeta Faculty',
      rating: 4.8,
      reviewCount: 350,
      price: 44.99,
      duration: '6h',
      students: 350,
      lessons: 9,
      level: 'Beginner',
      category: 'Education',
      image: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Promote sanitation, hygiene, and safety in school environments.'
    },
    {
      id: '112',
      title: 'Promoting Community Health and Safety',
      instructor: 'OponMeta Faculty',
      rating: 4.7,
      reviewCount: 320,
      price: 39.99,
      duration: '5h',
      students: 300,
      lessons: 8,
      level: 'Beginner',
      category: 'Community',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Learn to promote sanitation, hygiene, and safety in communities.'
    },
    {
      id: '113',
      title: 'Fundamentals of Water Sanitation and Hygiene (WASH)',
      instructor: 'OponMeta Faculty',
      rating: 4.8,
      reviewCount: 300,
      price: 39.99,
      duration: '5h',
      students: 250,
      lessons: 8,
      level: 'Beginner',
      category: 'Public Health',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Master WASH principles for public health and community well-being.'
    },
    {
      id: '114',
      title: 'Building Your Entrepreneurial Foundation',
      instructor: 'OponMeta Faculty',
      rating: 4.9,
      reviewCount: 500,
      price: 59.99,
      duration: '8h',
      students: 600,
      lessons: 12,
      level: 'Beginner',
      category: 'Entrepreneurship',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&w=400&h=300&fit=crop',
      summary: 'Develop entrepreneurial mindset, business planning, and launch skills.'
    }
  ];

  const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  return (
    <div className="flex">
      {/* Filter Sidebar */}
      <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Course Catalog</h1>
              <p className="mt-1 text-sm text-gray-600">
                Discover {courses.length.toLocaleString()} courses to advance your skills
              </p>
            </div>
            
            {/* Controls */}
            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Sort by: {sortOptions.find(option => option.value === sortBy)?.label}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
                {isSortOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setIsSortOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            sortBy === option.value
                              ? 'bg-indigo-50 text-indigo-700'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-md">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${
                    viewMode === 'grid'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${
                    viewMode === 'list'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="p-6">
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
              Load More Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;