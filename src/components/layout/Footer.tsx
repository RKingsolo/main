import React, { useState } from 'react';
import { MapPin, Phone, Mail, Church, Calendar, Clock } from 'lucide-react';
import AdminLoginModal from '../admin/AdminLoginModal';

// Footer component with church information and admin login access
const Footer: React.FC = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Church className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Church of Christ</h3>
                <p className="text-gray-400 text-sm">Makurdi</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A community of believers dedicated to following Christ and serving others with love and compassion.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  No.5 Owerri Street<br />
                  High Level, Makurdi<br />
                  Benue State, Nigeria
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+234 XXX XXX XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">info@churchofchristmakurdi.org</p>
              </div>
            </div>
          </div>

          {/* Service Times */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Service Times</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Sunday Worship</p>
                  <p className="text-gray-400 text-xs">8:00 AM & 10:30 AM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Bible Study</p>
                  <p className="text-gray-400 text-xs">Wednesday 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Youth Service</p>
                  <p className="text-gray-400 text-xs">Friday 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Admin Access */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="/sermons" className="block text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Recent Sermons
              </a>
              <a href="/events" className="block text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Upcoming Events
              </a>
              <a href="/ministries" className="block text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Our Ministries
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Get in Touch
              </a>
            </div>
            
            {/* Admin Login Button */}
            <div className="pt-4 border-t border-gray-700">
              <button
                onClick={() => setShowAdminLogin(true)}
                className="text-xs text-gray-500 hover:text-gray-400 transition-colors duration-200"
              >
                Admin Access
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Church of Christ, Makurdi. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2 md:mt-0">
              Built with love for our community
            </p>
          </div>
        </div>
      </div>

      {/* Admin Login Modal */}
      <AdminLoginModal 
        isOpen={showAdminLogin}
        onClose={() => setShowAdminLogin(false)}
      />
    </footer>
  );
};

export default Footer;