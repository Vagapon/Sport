import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Plus, Calendar, Users, MapPin, Clock, Star, Heart, X, Upload, Save, Edit, Trash2, Sun, Moon } from 'lucide-react';

// Event Detail Modal
const EventDetailModal = ({ isOpen, onClose, event, onEdit, onDelete }) => {
  if (!isOpen || !event) return null;

  const IconComponent = event.icon;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <div className={`absolute top-4 left-4 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl ${event.color}`}>
            <IconComponent className="w-6 h-6" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {event.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {event.count.toLocaleString()} events • {event.totalSize}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(event)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={() => onDelete(event)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Storage Usage</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{event.usage}</p>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                <div 
                  className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  style={{ width: event.usage }}
                />
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Size</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{event.totalSize}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              This is a detailed description of the {event.title.toLowerCase()}. It includes various activities, 
              schedules, and important information for participants and organizers.
            </p>
          </div>

          {/* Event Details */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Event Details</h3>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Calendar className="w-5 h-5" />
              <span>March 15-17, 2024</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <MapPin className="w-5 h-5" />
              <span>Convention Center, Downtown</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Users className="w-5 h-5" />
              <span>{event.count.toLocaleString()} attendees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Upload Event Modal
const UploadEventModal = ({ isOpen, onClose, onUpload }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    date: '',
    location: '',
    image: ''
  });

  const categories = [
    { value: 'music', label: 'Music Festival', icon: Calendar, color: 'text-teal-600' },
    { value: 'tech', label: 'Tech Conference', icon: Users, color: 'text-pink-600' },
    { value: 'art', label: 'Art Exhibition', icon: Star, color: 'text-blue-600' },
    { value: 'food', label: 'Food Festival', icon: Heart, color: 'text-orange-600' },
    { value: 'sport', label: 'Sport Events', icon: MapPin, color: 'text-yellow-600' },
    { value: 'wedding', label: 'Wedding Events', icon: Clock, color: 'text-purple-600' }
  ];

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!formData.title || !formData.category) {
      alert('Please fill in required fields');
      return;
    }
    
    onUpload({
      ...formData,
      id: Date.now(),
      count: Math.floor(Math.random() * 1000) + 50,
      usage: Math.floor(Math.random() * 50) + 10 + '%',
      totalSize: (Math.random() * 50 + 5).toFixed(2) + ' GB',
      icon: categories.find(cat => cat.value === formData.category)?.icon || Calendar,
      color: categories.find(cat => cat.value === formData.category)?.color || 'text-blue-600',
      image: formData.image || 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
    });
    setFormData({
      title: '',
      category: '',
      description: '',
      date: '',
      location: '',
      image: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Upload New Event</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Event Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter event title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category *
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter event description"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter location"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Image URL
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter image URL"
            />
          </div>

          {/* File Upload Area */}
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Drag and drop files here, or click to select
            </p>
            <input
              type="file"
              multiple
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg cursor-pointer transition-colors"
            >
              Choose Files
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              Upload Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Edit Event Modal
const EditEventModal = ({ isOpen, onClose, event, onSave }) => {
  const [formData, setFormData] = useState({
    title: event?.title || '',
    category: '',
    description: '',
    date: '',
    location: '',
    image: event?.image || ''
  });

  const categories = [
    { value: 'music', label: 'Music Festival', icon: Calendar, color: 'text-teal-600' },
    { value: 'tech', label: 'Tech Conference', icon: Users, color: 'text-pink-600' },
    { value: 'art', label: 'Art Exhibition', icon: Star, color: 'text-blue-600' },
    { value: 'food', label: 'Food Festival', icon: Heart, color: 'text-orange-600' },
    { value: 'sport', label: 'Sport Events', icon: MapPin, color: 'text-yellow-600' },
    { value: 'wedding', label: 'Wedding Events', icon: Clock, color: 'text-purple-600' }
  ];

  if (!isOpen || !event) return null;

  const handleSubmit = () => {
    onSave({
      ...event,
      ...formData,
      icon: categories.find(cat => cat.value === formData.category)?.icon || event.icon,
      color: categories.find(cat => cat.value === formData.category)?.color || event.color
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Event</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Event Title
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Image URL
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Event = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  
  // Modal states
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Sample event data
  const [eventData, setEventData] = useState([
    {
      id: 1,
      title: 'Music Festival',
      count: 245,
      usage: '17%',
      totalSize: '26.40 GB',
      icon: Calendar,
      color: 'text-teal-600',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Tech Conference',
      count: 245,
      usage: '22%', 
      totalSize: '26.40 GB',
      icon: Users,
      color: 'text-pink-600',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Art Exhibition',
      count: 830,
      usage: '23%',
      totalSize: '18.90 GB', 
      icon: Star,
      color: 'text-blue-600',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Food Festival',
      count: 1200,
      usage: '65%',
      totalSize: '85.30 GB',
      icon: Heart,
      color: 'text-orange-600',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Sport Events',
      count: 78,
      usage: '10%',
      totalSize: '5.40 GB',
      icon: MapPin,
      color: 'text-yellow-600',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop'
    },
    {
      id: 6, 
      title: 'Wedding Events',
      count: 245,
      usage: '16%',
      totalSize: '26.40 GB',
      icon: Clock,
      color: 'text-purple-600',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop'
    }
  ]);

  const itemsPerSlide = 6;
  const maxSlides = Math.ceil(eventData.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setShowDetailModal(true);
  };

  const handleUploadEvent = (newEvent) => {
    setEventData(prev => [...prev, newEvent]);
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setShowDetailModal(false);
    setShowEditModal(true);
  };

  const handleSaveEdit = (updatedEvent) => {
    setEventData(prev => prev.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    ));
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (eventToDelete) => {
    if (window.confirm(`Are you sure you want to delete "${eventToDelete.title}"?`)) {
      setEventData(prev => prev.filter(event => event.id !== eventToDelete.id));
      setShowDetailModal(false);
      setSelectedEvent(null);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Event Manager</h1>
            <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 dark:text-white">Event Manager</span>
            </nav>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Summary Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Events</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {eventData.reduce((sum, item) => sum + item.count, 0).toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Storage Used</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">234.5 GB</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Active Events</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{eventData.length}</p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Star className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Categories</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">6</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Upload Section */}
        <div className="flex flex-col sm:flex-row justify-between