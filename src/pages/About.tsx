import React from 'react';
import { Users, Heart, Globe, BookOpen } from 'lucide-react';
import PageLayout from '../components/common/PageLayout';
import Hero from '../components/common/Hero';

// About Us page component
const About: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="About Our Church"
        subtitle="Learn about our history, mission, and the community that makes us who we are"
        backgroundImage="https://images.pexels.com/photos/12966/pexels-photo-12966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Church of Christ in Makurdi has been a beacon of faith and hope in our community 
                for many years. Located at No.5 Owerri Street, High Level Makurdi, we have grown 
                from a small gathering of believers to a vibrant church family.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our church is built on the foundation of Christ's teachings, emphasizing love, 
                fellowship, and service to others. We believe in the power of community and the 
                importance of supporting one another in our spiritual journey.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to serve our community through various ministries, outreach 
                programs, and by providing a welcoming space for worship, learning, and fellowship.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7845242/pexels-photo-7845242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Church community"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do as a church community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Biblical Truth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are committed to teaching and living according to God's Word, 
                making it the foundation of all we do.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Love & Compassion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We strive to show Christ's love through our actions, caring for one another 
                and our community.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in the power of fellowship and building strong relationships 
                within our church family.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are called to serve others, both within our church and in the broader 
                community around us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who help guide our church community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for leadership team - can be made editable through admin */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Elder John Doe</h3>
              <p className="text-gray-600 text-sm mb-4">Senior Pastor</p>
              <p className="text-gray-600 text-sm">
                Leading our congregation with wisdom and compassion for over 15 years.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deacon Jane Smith</h3>
              <p className="text-gray-600 text-sm mb-4">Ministry Coordinator</p>
              <p className="text-gray-600 text-sm">
                Coordinating our various ministries and community outreach programs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brother Mike Johnson</h3>
              <p className="text-gray-600 text-sm mb-4">Youth Pastor</p>
              <p className="text-gray-600 text-sm">
                Dedicated to mentoring and guiding our young people in their faith journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Church Family
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We'd love to welcome you into our community. Come and see what God is doing 
            through our church family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a
              href="/events"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;