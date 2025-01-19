import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <div className="bg-[#F7EDE2] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Mail className="w-8 h-8 text-[#B76E79] mr-3" />
            <h1 className="text-4xl font-serif text-[#4A4A4A]">Contact Us</h1>
          </div>
          <p className="text-center text-lg text-[#4A4A4A] max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-serif text-[#4A4A4A] mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#B76E79] text-white px-6 py-3 rounded-full hover:bg-[#a25964] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-[#4A4A4A] mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#B76E79] mt-1" />
                <div>
                  <h3 className="font-medium text-[#4A4A4A]">Address</h3>
                  <p className="text-[#4A4A4A]">
                    Manfred Björkquists alle 8<br />
                    193 31 Sigtuna<br />
                    Sweden
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#B76E79] mt-1" />
                <div>
                  <h3 className="font-medium text-[#4A4A4A]">Email</h3>
                  <p className="text-[#4A4A4A]">basmoh2009@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#F7EDE2] p-6 rounded-lg">
              <h3 className="font-serif text-lg text-[#4A4A4A] mb-4">Business Hours</h3>
              <div className="space-y-2 text-[#4A4A4A]">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}