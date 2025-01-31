import React, { useState } from 'react';
import axios from 'axios';

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    otherService: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Combine service and otherService if "Other" is selected
      const serviceToSubmit = formData.service === 'Other' ? formData.otherService : formData.service;
      
      await axios.post('http://localhost:5000/api/appointments', {
        ...formData,
        service: serviceToSubmit
      });
      alert('Appointment scheduled successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        otherService: '',
        date: '',
        time: '',
        message: ''
      });
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      alert('Error scheduling appointment. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-8">Schedule an Appointment</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">Select a service</option>
                <option value="General Repair">General Repair</option>
                <option value="Oil Change">Oil Change</option>
                <option value="Battery Service">Battery Service</option>
                <option value="Brake Service">Brake Service</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {formData.service === 'Other' && (
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2" htmlFor="otherService">
                  Please specify the service you need
                </label>
                <input
                  type="text"
                  id="otherService"
                  name="otherService"
                  value={formData.otherService}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter the service you need"
                  required
                />
              </div>
            )}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 mb-2" htmlFor="message">Additional Notes</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Schedule Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointments;