import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Search,
  Menu,
  User,
  CreditCard,
  X
} from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const slides = [
    {
      image: "https://i.eurosport.com/2019/08/13/2654862-54919550-2560-1440.jpg",
      title: "First in Golf",
      subtitle: "Teams, Leagues and Competitions",
      buttonText: "Join Our Club"
    },
    {
      image: "https://bcp.cdnchinhphu.vn/Uploaded/buithuhuong/2018_07_12/u23.jpg",
      title: "Premium Experience",
      subtitle: "Professional Training & Championship Events",
      buttonText: "Book Now"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg",
      title: "Elite Coaching",
      subtitle: "Learn from the Best Professional Instructors",
      buttonText: "Start Training"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navigation Header */}
 <nav className="absolute top-0 left-0 right-0 z-50">

        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-white rounded-full p-2 sm:p-3 shadow-lg">
                <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5S9.5 8.83 9.5 8zM16 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
              </div>
              <div className="ml-2 sm:ml-3 text-white">
                <div className="font-bold text-sm sm:text-lg tracking-wider">PUTTER</div>
                <div className="text-xs tracking-widest opacity-80 hidden sm:block">GOLF CLUB</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'Pages', 'Book Courses', 'Blog', 'Shop'].map((item) => (
                <a key={item} href="#" className="text-white hover:text-green-400 font-medium transition-colors duration-300 text-sm xl:text-base">
                  {item}
                </a>
              ))}
            </div>

            {/* Right Icons & Mobile Menu */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Desktop Icons */}
              <div className="hidden sm:flex items-center space-x-3">
                <button className="relative text-white hover:text-green-400 transition-colors duration-300">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">0</span>
                </button>
                <button className="text-white hover:text-green-400 transition-colors duration-300">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button className="text-white hover:text-green-400 transition-colors duration-300">
                  <User className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className="lg:hidden text-white hover:text-green-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Improved */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          menuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 py-4">
              <div className="space-y-4">
                {['Home', 'Pages', 'Book Courses', 'Blog', 'Shop'].map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className="block text-white font-medium hover:text-green-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                
                {/* Mobile Icons */}
                <div className="flex items-center justify-center space-x-6 pt-4 border-t border-white/10">
                  <button className="relative text-white hover:text-green-400 transition-colors duration-300">
                    <ShoppingCart className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                  </button>
                  <button className="text-white hover:text-green-400 transition-colors duration-300">
                    <Search className="w-6 h-6" />
                  </button>
                  <button className="text-white hover:text-green-400 transition-colors duration-300">
                    <User className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Slider */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
          </div>
        ))}
      </div>

      {/* Content - Improved Responsive */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-20 px-4 sm:px-6">
        <div className="max-w-4xl w-full">
          <h1
            key={currentSlide}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 animate-fade-in-up"
            style={{
              fontFamily: 'Arial Black, sans-serif',
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              animation: 'fadeInUp 1s ease-out'
            }}
          >
            {slides[currentSlide].title}
          </h1>
          <p
            key={`subtitle-${currentSlide}`}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 opacity-90 font-light tracking-wide animate-fade-in-up max-w-2xl mx-auto"
            style={{
              animationDelay: '0.3s',
              animation: 'fadeInUp 1s ease-out 0.3s both'
            }}
          >
            {slides[currentSlide].subtitle}
          </p>
          <button
            key={`button-${currentSlide}`}
            className="bg-green-500 hover:bg-green-600 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-none uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-2xl animate-fade-in-up"
            style={{
              animationDelay: '0.6s',
              animation: 'fadeInUp 1s ease-out 0.6s both'
            }}
          >
            {slides[currentSlide].buttonText}
          </button>
        </div>
      </div>

      {/* Arrows - Responsive */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Slide Counter - Responsive */}
      <div className="absolute left-2 sm:left-4 lg:left-8 bottom-4 sm:bottom-8 z-30 text-white text-2xl sm:text-3xl lg:text-4xl font-light">
        <span className="font-bold">0{currentSlide + 1}</span>
        <span className="opacity-50">/0{slides.length}</span>
      </div>

      <div className="absolute right-2 sm:right-4 lg:right-8 bottom-4 sm:bottom-8 z-30 text-white text-2xl sm:text-3xl lg:text-4xl font-light">
        <span className="font-bold">0{((currentSlide + 1) % slides.length) + 1}</span>
        <span className="opacity-50">/0{slides.length}</span>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Side Buttons - Hidden on mobile */}
      <div className="hidden lg:flex fixed right-0 top-1/2 transform -translate-y-1/2 z-40 flex-col space-y-1">
        {[ShoppingCart, User, CreditCard].map((Icon, i) => (
          <button key={i} className="bg-green-500 hover:bg-green-600 text-white p-4 transition-all duration-300 hover:scale-110">
            <Icon className="w-6 h-6" />
          </button>
        ))}
      </div>

      {/* Chat Button - Responsive */}
      <button className="fixed bottom-4 sm:bottom-8 left-2 sm:left-4 lg:left-8 z-40 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
        <span className="font-medium text-sm sm:text-base">Chat</span>
      </button>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;