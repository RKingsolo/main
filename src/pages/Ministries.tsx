import React from 'react';
import { Users, Heart, BookOpen, Music, Baby, Handshake } from 'lucide-react';
import PageLayout from '../components/common/PageLayout';
import Hero from '../components/common/Hero';
import { getMinistries } from '../utils/storage';
import { Ministry } from '../types';

// Ministries page component showcasing church ministries
const Ministries: React.FC = () => {
  const ministries: Ministry[] = getMinistries();

  // Default ministries if none exist
  const defaultMinistries: Ministry[] = [
    {
      id: '1',
      name: 'Youth Ministry',
      description: 'Empowering young people to grow in faith and leadership through fellowship, Bible study, and community service.',
      leader: 'Brother Mike Johnson',
      contactEmail: 'youth@churchofchristmakurdi.org',
      meetingTime: 'Fridays at 6:00 PM',
      imageUrl: 'https://images.pexels.com/photos/8923562/pexels-photo-8923562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '2',
      name: 'Women\'s Ministry',
      description: 'A supportive community for women to grow spiritually, build friendships, and serve together in various outreach programs.',
      leader: 'Sister Grace Adamu',
      contactEmail: 'women@churchofchristmakurdi.org',
      meetingTime: 'Saturdays at 10:00 AM',
      imageUrl: 'https://images.pexels.com/photos/8923564/pexels-photo-8923564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '3',
      name: 'Children\'s Ministry',
      description: 'Teaching children about God\'s love through age-appropriate lessons, activities, and fun learning experiences.',
      leader: 'Sister Mary Ochoga',
      contactEmail: 'children@churchofchristmakurdi.org',
      meetingTime: 'Sundays during service',
      imageUrl: 'https://images.pexels.com/photos/8923563/pexels-photo-8923563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '4',
      name: 'Music Ministry',
      description: 'Leading worship through music and song, creating an atmosphere of praise and worship for our congregation.',
      leader: 'Brother David Terver',
      contactEmail: 'music@churchofchristmakurdi.org',
      meetingTime: 'Thursdays at 7:00 PM',
      imageUrl: 'https://images.pexels.com/photos/8923565/pexels-photo-8923565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '5',
      name: 'Outreach Ministry',
      description: 'Reaching out to our community with the love of Christ through evangelism, community service, and charitable works.',
      leader: 'Elder Samuel Iorfa',
      contactEmail: 'outreach@churchofchristmakurdi.org',
      meetingTime: 'Saturdays at 2:00 PM',
      imageUrl: 'https://images.pexels.com/photos/6994314/pexels-photo-6994314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '6',
      name: 'Men\'s Fellowship',
      description: 'Building strong Christian men through fellowship, accountability, and service to God and community.',
      leader: 'Brother Paul Agber',
      contactEmail: 'men@churchofchristmakurdi.org',
      meetingTime: 'First Saturday of each month at 8:00 AM',
      imageUrl: 'https://images.pexels.com/photos/8923566/pexels-photo-8923566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const displayMinistries = ministries.length > 0 ? ministries : defaultMinistries;

  const getMinistryIcon = (name: string) => {
    if (name.toLowerCase().includes('youth')) return Users;
    if (name.toLowerCase().includes('women')) return Heart;
    if (name.toLowerCase().includes('children')) return Baby;
    if (name.toLowerCase().includes('music')) return Music;
    if (name.toLowerCase().includes('outreach')) return Handshake;
    return BookOpen;
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <Hero
        title="Our Ministries"
        subtitle="Discover the various ways we serve God and our community together"
        backgroundImage="https://images.pexels.com/photos/8923567/pexels-photo-8923567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Together in Faith
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Church of Christ, we believe that every member has unique gifts and talents that can be used 
              to serve God and bless others. Our ministries provide opportunities for fellowship, growth, and 
              meaningful service in our church and community.
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayMinistries.map((ministry) => {
              const IconComponent = getMinistryIcon(ministry.name);
              return (
                <div key={ministry.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Ministry Image */}
                  <div className="relative h-48 bg-gray-200">
                    {ministry.imageUrl ? (
                      <img
                        src={ministry.imageUrl}
                        alt={ministry.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                        <IconComponent className="h-16 w-16 text-blue-600" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>

                  {/* Ministry Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{ministry.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {ministry.description}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-700">Leader:</span>
                        <span className="text-gray-600">{ministry.leader}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-700">Meeting Time:</span>
                        <span className="text-gray-600">{ministry.meetingTime}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <a
                        href={`mailto:${ministry.contactEmail}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                      >
                        Contact Ministry Leader
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Involved
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We encourage everyone to find their place in ministry. Whether you're new to faith or 
              have been walking with Christ for years, there's a place for you to serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover Your Gifts</h3>
              <p className="text-gray-600">
                God has given each of us unique talents and abilities to serve His kingdom.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect with Others</h3>
              <p className="text-gray-600">
                Build meaningful relationships while serving together in ministry.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Make a Difference</h3>
              <p className="text-gray-600">
                Use your gifts to impact lives and spread God's love in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our ministries and find the perfect place for you to serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
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

export default Ministries;