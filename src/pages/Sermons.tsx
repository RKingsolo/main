import React, { useState } from 'react';
import { Play, Download, Calendar, User, Tag, Search, Filter } from 'lucide-react';
import PageLayout from '../components/common/PageLayout';
import Hero from '../components/common/Hero';
import { getSermons } from '../utils/storage';
import { Sermon } from '../types';

// Sermons page component with search and filtering capabilities
const Sermons: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState('');
  
  const sermons: Sermon[] = getSermons();

  // Default sermons if none exist
  const defaultSermons: Sermon[] = [
    {
      id: '1',
      title: 'Walking in Faith',
      speaker: 'Elder John Doe',
      date: '2024-12-15',
      description: 'A powerful message about trusting God in uncertain times and walking by faith, not by sight.',
      audioUrl: '#',
      videoUrl: '#',
      tags: ['faith', 'trust', 'christian-living']
    },
    {
      id: '2',
      title: 'The Power of Prayer',
      speaker: 'Pastor Samuel Iorfa',
      date: '2024-12-08',
      description: 'Understanding the importance of prayer in our daily lives and how it transforms our relationship with God.',
      audioUrl: '#',
      tags: ['prayer', 'spiritual-growth', 'relationship-with-god']
    },
    {
      id: '3',
      title: 'Love Your Neighbor',
      speaker: 'Elder John Doe',
      date: '2024-12-01',
      description: 'Exploring what it truly means to love our neighbors as ourselves and live out Christ\'s commandments.',
      audioUrl: '#',
      videoUrl: '#',
      tags: ['love', 'community', 'commandments']
    },
    {
      id: '4',
      title: 'Hope in Christ',
      speaker: 'Deacon Paul Agber',
      date: '2024-11-24',
      description: 'Finding hope and strength in Christ during life\'s challenges and difficulties.',
      audioUrl: '#',
      tags: ['hope', 'encouragement', 'christ']
    },
    {
      id: '5',
      title: 'The Great Commission',
      speaker: 'Pastor Samuel Iorfa',
      date: '2024-11-17',
      description: 'Understanding our calling to share the Gospel and make disciples of all nations.',
      audioUrl: '#',
      videoUrl: '#',
      tags: ['evangelism', 'mission', 'great-commission']
    },
    {
      id: '6',
      title: 'Fruits of the Spirit',
      speaker: 'Elder John Doe',
      date: '2024-11-10',
      description: 'Examining the fruits of the Spirit and how they should be evident in our daily lives.',
      audioUrl: '#',
      tags: ['holy-spirit', 'character', 'spiritual-growth']
    }
  ];

  const displaySermons = sermons.length > 0 ? sermons : defaultSermons;

  // Get unique speakers and tags for filtering
  const speakers = [...new Set(displaySermons.map(sermon => sermon.speaker))];
  const allTags = [...new Set(displaySermons.flatMap(sermon => sermon.tags))];

  // Filter sermons based on search and filters
  const filteredSermons = displaySermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = !selectedTag || sermon.tags.includes(selectedTag);
    const matchesSpeaker = !selectedSpeaker || sermon.speaker === selectedSpeaker;
    
    return matchesSearch && matchesTag && matchesSpeaker;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('');
    setSelectedSpeaker('');
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="Sermons & Messages"
        subtitle="Listen to inspiring messages that will strengthen your faith and encourage your walk with God"
        backgroundImage="https://images.pexels.com/photos/8923568/pexels-photo-8923568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search sermons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Speaker Filter */}
              <select
                value={selectedSpeaker}
                onChange={(e) => setSelectedSpeaker(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Speakers</option>
                {speakers.map(speaker => (
                  <option key={speaker} value={speaker}>{speaker}</option>
                ))}
              </select>

              {/* Tag Filter */}
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Topics</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Messages
            </h2>
            <p className="text-lg text-gray-600">
              {filteredSermons.length} sermon{filteredSermons.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredSermons.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No sermons found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or clear the filters.</p>
              <button
                onClick={clearFilters}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSermons.map((sermon) => (
                <div key={sermon.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Sermon Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{sermon.title}</h3>
                    <div className="flex items-center space-x-4 text-blue-100 text-sm">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {sermon.speaker}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(sermon.date)}
                      </div>
                    </div>
                  </div>

                  {/* Sermon Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {sermon.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {sermon.tags.map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag.replace('-', ' ')}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      {sermon.audioUrl && (
                        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                          <Play className="h-4 w-4 mr-2" />
                          Listen
                        </button>
                      )}
                      {sermon.videoUrl && (
                        <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center">
                          <Play className="h-4 w-4 mr-2" />
                          Watch
                        </button>
                      )}
                      {sermon.audioUrl && (
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
                          <Download className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sermon Series Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Sermon Series
            </h2>
            <p className="text-lg text-gray-600">
              Join us as we explore God's Word together through our current teaching series
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="https://images.pexels.com/photos/8923569/pexels-photo-8923569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Current sermon series"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  "Living by Faith" Series
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join us for this powerful series as we explore what it means to live by faith in our daily lives. 
                  Through biblical examples and practical applications, we'll discover how faith can transform 
                  our perspective and guide our decisions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Series Duration</h4>
                    <p className="text-gray-600">6 weeks (November - December 2024)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Service Times</h4>
                    <p className="text-gray-600">Sundays at 8:00 AM & 10:30 AM</p>
                  </div>
                </div>
                <a
                  href="/events"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  View Schedule
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never Miss a Message
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our podcast or visit us in person to stay connected with God's Word.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Subscribe to Podcast
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Visit Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Sermons;