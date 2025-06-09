import React from 'react';
import { Calendar, Users, Heart, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/common/PageLayout';
import Hero from '../components/common/Hero';
import { getEvents, getSermons } from '../utils/storage';

// Home page component with welcome section and highlights
const Home: React.FC = () => {
  const upcomingEvents = getEvents().slice(0, 3);
  const recentSermons = getSermons().slice(0, 3);

  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="Welcome to Church of Christ"
        subtitle="Join us in worship and fellowship as we grow together in faith and love"
        height="large"
        backgroundImage="https://images.pexels.com/photos/8468/candles-dark-church-cathedral.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Welcome Message Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Our Church Family
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Located at No.5 Owerri Street, High Level Makurdi, we are a community of believers 
              committed to following Christ's teachings and serving our community with love and compassion.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bible Study</h3>
              <p className="text-gray-600 text-sm">
                Deep dive into God's word every Wednesday evening
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fellowship</h3>
              <p className="text-gray-600 text-sm">
                Building strong relationships within our church family
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Service</h3>
              <p className="text-gray-600 text-sm">
                Serving our community with Christ's love
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Worship</h3>
              <p className="text-gray-600 text-sm">
                Sunday services at 8:00 AM and 10:30 AM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Us for Worship
            </h2>
            <p className="text-lg text-gray-600">
              We invite you to join us for our regular worship services and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sunday Worship</h3>
              <p className="text-gray-600 mb-4">
                Morning Service: 8:00 AM<br />
                Evening Service: 10:30 AM
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bible Study</h3>
              <p className="text-gray-600 mb-4">
                Wednesday Evening<br />
                7:00 PM
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Youth Service</h3>
              <p className="text-gray-600 mb-4">
                Friday Evening<br />
                6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Come As You Are
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're new to faith or have been walking with Christ for years, 
            you'll find a warm welcome and genuine community here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Visit Us
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;