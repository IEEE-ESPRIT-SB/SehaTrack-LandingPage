'use client';
import React, { useState } from 'react';
import contactImage from '@/public/images/contact-image.jpg'; // Assurez-vous que le chemin est correct

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'arij.mahjoub@ieee.org', // Remplacez par le destinataire réel
          subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          text: `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`,
          html: `
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
          `,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(true);
    }
  };

  return (
    <section id="contact-us">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.200),theme(colors.gray.50),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Get in Touch with Us
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-green-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We'd love to hear from you. Please fill out the form below.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Form Section */}
            <div className="lg:w-1/2 w-full flex flex-col items-center text-center lg:text-left lg:items-start">
              <form onSubmit={handleSubmit} className="mt-8 space-y-4 w-full max-w-md bg-gray-900 bg-opacity-80 p-6 rounded-lg backdrop-blur-xl">
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-x-4">
                  <div className="flex flex-col">
                    <label htmlFor="firstName" className="text-sm font-medium text-white">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 px-3 py-2 border border-gray-700 rounded-md bg-transparent text-white"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lastName" className="text-sm font-medium text-white">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 px-3 py-2 border border-gray-700 rounded-md bg-transparent text-white"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 border border-gray-700 rounded-md bg-transparent text-white"
                    placeholder="Email"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm font-medium text-white">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 border border-gray-700 rounded-md bg-transparent text-white"
                    placeholder="Phone number"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 px-3 py-2 border border-gray-700 rounded-md bg-transparent text-white"
                    placeholder="Leave us a message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-t from-green-600 to-green-500 text-white font-semibold rounded-md hover:bg-green-200/65 transition"
                >
                  Send Message
                </button>
              </form>

              {success && <p className="mt-4 text-green-500">Message sent successfully!</p>}
              {error && <p className="mt-4 text-red-500">Something went wrong. Please try again.</p>}
            </div>

            {/* Image Section */}
            <div
              className="lg:w-1/2  lg:flex hidden justify-center lg:justify-start mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-xl"
              style={{
                backgroundImage: `url(${contactImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '500px',
                filter: 'brightness(0.6)', // Appliquer un filtre sombre pour améliorer le contraste
                animation: 'moveBackground 10s infinite linear',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
