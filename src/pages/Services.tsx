import React from 'react';
import { Wrench, Car, File as Oil, Battery } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="w-12 h-12 text-blue-600" />,
    title: 'General Repair',
    description: 'Complete diagnostic and repair services for all vehicle makes and models',
    price: 'From $50'
  },
  {
    icon: <Oil className="w-12 h-12 text-blue-600" />,
    title: 'Oil Change',
    description: 'Regular oil changes to keep your engine running smoothly',
    price: 'From $30'
  },
  {
    icon: <Battery className="w-12 h-12 text-blue-600" />,
    title: 'Battery Service',
    description: 'Battery testing, charging, and replacement services',
    price: 'From $45'
  },
  {
    icon: <Car className="w-12 h-12 text-blue-600" />,
    title: 'Brake Service',
    description: 'Complete brake inspection and repair services',
    price: 'From $80'
  }
];

const Services = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center mb-4">{service.description}</p>
              <p className="text-blue-600 font-semibold text-center">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;