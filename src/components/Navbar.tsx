import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Wrench size={24} />
            <span className="text-xl font-bold">AutoCare Pro</span>
          </Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/services" className="hover:text-blue-200">Services</Link>
            <Link to="/appointments" className="hover:text-blue-200">Book Appointment</Link>
            <Link to="/contact" className="hover:text-blue-200">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;