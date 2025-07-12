import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import CourseCatalog from './components/CourseCatalog';
import HeroSection from './components/HeroSection';
import WhatWeOffer from './components/WhatWeOffer';
import FeaturedCourses from './components/FeaturedCourses';
import About from './components/About';
import Programme from './components/Programme';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CourseDetail from './components/CourseDetail';
import JoinNow from './components/JoinNow';
import Mentorship from './components/Mentorship';
import Workshop from './components/Workshop';
import Partners from './components/Partners';
import PricingPage from './components/PricingPage';
import Resources from './components/Resources';
import Community from './components/Community';
import StudentDashboard from './components/StudentDashboard';
import VendorDashboard from './components/VendorDashboard';
import Certificate from './components/Certificate';
import Settings from './components/Settings';
import BrandBanner from './components/BrandBanner';
import Press from './components/Press';
import Events from './components/Events';
import LearningTiers from './components/LearningTiers';
import TrustedByCarousel from './components/TrustedByCarousel';
import FloatingAdBanner from './components/FloatingAdBanner';
import PostPricingCTA from './components/PostPricingCTA';

const Placeholder = ({ title }: { title: string }) => (
  <div className="max-w-4xl mx-auto py-20 px-4 text-center">
    <h1 className="text-4xl font-bold text-[#0a174e] mb-4">{title}</h1>
    <p className="text-gray-600">This page is under construction. Content coming soon!</p>
  </div>
);

const HomePage = () => (
  <>
    <BrandBanner />
    <HeroSection />
    <WhatWeOffer />
    <FeaturedCourses />
    <TrustedByCarousel />
    <div className="flex flex-col items-center my-8 space-y-4">
      <a
        href="/programme"
        className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-lg font-bold rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200"
      >
        Browse All Courses
      </a>
      <a
        href="/certificate/sample"
        className="inline-block px-6 py-2 border-2 border-yellow-400 text-yellow-700 font-semibold rounded-lg hover:bg-yellow-50 transition-all duration-200"
      >
        Preview Sample Certificate
      </a>
    </div>
    <Testimonials />
    <Pricing />
    <PostPricingCTA />
    {/* Navigation Tabs */}
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8">
          {/* You can keep or remove these buttons as needed */}
        </nav>
      </div>
    </div>
    {/* Main Content */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Optionally render Dashboard or CourseCatalog here if needed */}
    </main>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <FloatingAdBanner />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/programme/:category?" element={<Programme />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/join" element={<JoinNow />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/workshops" element={<Workshop />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/community" element={<Community />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/vendor-dashboard" element={<VendorDashboard />} />
            <Route path="/login" element={<Placeholder title="Log In / Sign Up" />} />
            <Route path="/certificate/sample" element={<Certificate />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/press" element={<Press />} />
            <Route path="/events" element={<Events />} />
            <Route path="/learning-tiers" element={<LearningTiers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;