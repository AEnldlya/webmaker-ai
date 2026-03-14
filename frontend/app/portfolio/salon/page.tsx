'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Scissors, Clock, MapPin, Phone, Star, Calendar, ChevronRight } from 'lucide-react';

export default function SalonDemo() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Back to Portfolio */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all text-gray-800 hover:text-rose-600 border border-gray-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-medium text-sm">← Back to Portfolio</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900 font-serif">Summer Street</span>
                <span className="block text-xs text-rose-500 font-medium tracking-widest uppercase">Hair Studio</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-rose-500 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-600 hover:text-rose-500 transition-colors font-medium">Services</a>
              <a href="#stylists" className="text-gray-600 hover:text-rose-500 transition-colors font-medium">Stylists</a>
              <a href="#gallery" className="text-gray-600 hover:text-rose-500 transition-colors font-medium">Gallery</a>
              <a href="#contact" className="bg-rose-500 text-white px-6 py-3 rounded-full font-medium hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-rose-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-rose-500 font-medium tracking-widest uppercase text-sm">Est. 2015</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6 font-serif leading-tight">
                Where Beauty
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
                  Meets Artistry
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience luxury hair care in the heart of the city. Our award-winning stylists 
                create personalized looks that enhance your natural beauty.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-600 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                </button>
                <button className="border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full font-semibold hover:bg-rose-50 transition-all">
                  View Services
                </button>
              </div>
              <div className="flex items-center space-x-6 mt-10">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">500+ Happy Clients</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-200 to-pink-300">
                <div className="w-full h-full flex items-center justify-center text-rose-400/50">
                  <Scissors className="h-32 w-32" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold text-rose-500">10+</p>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-rose-300 to-pink-400 mb-4"></div>
                    <p className="text-gray-400">Salon Interior</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-rose-500 font-medium tracking-widest uppercase text-sm">About Us</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6 font-serif">
                A Sanctuary of Style
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Summer Street Hair Studio has been Boston's premier destination for luxury hair care 
                since 2015. Our team of internationally trained stylists brings creativity, passion, 
                and precision to every appointment.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe that great hair is the foundation of confidence. That's why we use only 
                premium products and cutting-edge techniques to deliver results that exceed expectations.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-rose-500">15+</p>
                  <p className="text-gray-600 text-sm mt-1">Expert Stylists</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-rose-500">50K+</p>
                  <p className="text-gray-600 text-sm mt-1">Haircuts</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-rose-500">4.9</p>
                  <p className="text-gray-600 text-sm mt-1">Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-medium tracking-widest uppercase text-sm">Services</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 font-serif">Our Signature Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Precision Cut', price: '$65+', desc: 'Custom cuts tailored to your face shape and lifestyle' },
              { name: 'Color & Highlights', price: '$120+', desc: 'Full color, balayage, ombre, and creative color' },
              { name: 'Blowout & Style', price: '$45+', desc: 'Professional styling for any occasion' },
              { name: 'Keratin Treatment', price: '$250+', desc: 'Smooth, frizz-free hair for months' },
              { name: 'Bridal Styling', price: '$150+', desc: 'Wedding day hair that lasts all night' },
              { name: 'Extensions', price: '$300+', desc: 'Premium human hair extensions' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-rose-500 font-semibold text-lg mb-3">{service.price}</p>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylists Section */}
      <section id="stylists" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-medium tracking-widest uppercase text-sm">Our Team</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 font-serif">Meet Our Stylists</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Isabella Rose', role: 'Creative Director', exp: '15 years' },
              { name: 'Marcus Chen', role: 'Color Specialist', exp: '12 years' },
              { name: 'Sofia Martinez', role: 'Senior Stylist', exp: '8 years' },
              { name: 'James Wilson', role: 'Barber Specialist', exp: '10 years' },
            ].map((stylist, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-rose-200 to-pink-300 mb-6 group-hover:scale-105 transition-transform"></div>
                <h3 className="text-xl font-bold text-gray-900">{stylist.name}</h3>
                <p className="text-rose-500 font-medium">{stylist.role}</p>
                <p className="text-gray-500 text-sm">{stylist.exp} experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-rose-400 font-medium tracking-widest uppercase text-sm">Contact</span>
              <h2 className="text-4xl font-bold mt-4 mb-6 font-serif">Book Your Appointment</h2>
              <p className="text-gray-400 text-lg mb-8">
                Ready to transform your look? Book your appointment today and let our experts 
                create the perfect style for you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">123 Summer Street, Boston, MA 02110</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">(617) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-400">Mon-Sat: 9AM - 8PM | Sun: 10AM - 6PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-gray-900"
            >
              <h3 className="text-2xl font-bold mb-6">Request Appointment</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all">
                  <option>Select Service</option>
                  <option>Precision Cut</option>
                  <option>Color & Highlights</option>
                  <option>Blowout & Style</option>
                  <option>Keratin Treatment</option>
                </select>
                <textarea placeholder="Special Requests" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"></textarea>
                <button type="submit" className="w-full bg-rose-500 text-white py-4 rounded-lg font-semibold hover:bg-rose-600 transition-colors">
                  Request Booking
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-serif">Summer Street</span>
            </div>
            <p className="text-sm">© 2024 Summer Street Hair Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
