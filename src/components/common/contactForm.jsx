"use client";
import React, { useState } from 'react';
import "@/styles/components/contact-form.scss"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    interest: '',
    message: '',
  });

  const interests = [
    'Package Tours',
    'Custom Itinerary',
    'Visa Services',
    'Flight Booking',
    'Hotel Reservation',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-form">
      <h4>Get Your Free Consultation</h4>
      <form className='' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">
            Full Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your name..."
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your mail..."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">
            Phone Number<span className="required">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your number..."
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="interest">
            What are you interested in?<span className="required">*</span>
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select your interest...
            </option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <input
            id="message"
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <button type="submit" className="submit-btn">
          Leave a Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;