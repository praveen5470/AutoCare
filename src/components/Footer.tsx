import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AutoCare Pro</h3>
            <p className="text-gray-400">Professional auto repair services you can trust.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/appointments" className="text-gray-400 hover:text-white">Book Appointment</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center"><Phone size={16} className="mr-2" /> (555) 123-4567</p>
              <p className="flex items-center"><Mail size={16} className="mr-2" /> info@autocarepro.com</p>
              <p className="flex items-center"><MapPin size={16} className="mr-2" /> 123 Auto Street, City, State 12345</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AutoCare Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;