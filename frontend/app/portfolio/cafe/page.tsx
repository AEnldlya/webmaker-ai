'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Coffee, Star, MapPin, Clock, Phone, Heart, Calendar, Music, Wifi, Instagram } from 'lucide-react';

export default function CafeDemo() {
  return (
    <div className="min-h-screen bg-amber-50 font-serif">
      {/* Back to Portfolio */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all text-amber-900 hover:text-amber-700 border border-amber-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-medium text-sm">← Back to Portfolio</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-amber-900 text-amber-50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center shadow-lg">
                <Coffee className="h-6 w-6 text-amber-900" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Morning Brew</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="text-amber-200 hover:text-white transition-colors">Menu</a>
              <a href="#about" className="text-amber-200 hover:text-white transition-colors">Our Story</a>
              <a href="#events" className="text-amber-200 hover:text-white transition-colors">Events</a>
              <a href="#visit" className="text-amber-200 hover:text-white transition-colors">Visit</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-400 font-medium tracking-[0.3em] uppercase text-sm">Est. 2016</span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mt-6 mb-4">
              Morning Brew
            </h1>
            <p className="text-2xl md:text-3xl text-amber-200 font-light italic mb-2">
              Artisan Coffee & Community
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto my-8"></div>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-10">
              Where every cup tells a story. Locally roasted, ethically sourced, 
              and crafted with love in the heart of Boston.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-amber-400 text-amber-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-300 transition-all shadow-xl">
                View Menu
              </button>
              <button className="border-2 border-amber-400 text-amber-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-400 hover:text-amber-900 transition-all">
                Order Online
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Menu</span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mt-4">Coffee & More</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: 'Coffee', items: [
                { name: 'Espresso', price: '$3.50', desc: 'Double shot, rich & bold' },
                { name: 'Cappuccino', price: '$4.50', desc: 'Espresso with steamed milk' },
                { name: 'Pour Over', price: '$5.00', desc: 'Single origin, rotating selection' },
              ]},
              { category: 'Specialty', items: [
                { name: 'Honey Lavender', price: '$6.00', desc: 'Espresso, honey, lavender' },
                { name: 'Maple Oat', price: '$5.50', desc: 'Oat milk, maple, cinnamon' },
                { name: 'Cold Brew', price: '$4.50', desc: '24-hour steeped, smooth' },
              ]},
              { category: 'Bites', items: [
                { name: 'Avocado Toast', price: '$9.00', desc: 'Sourdough, everything seasoning' },
                { name: 'Croissant', price: '$4.50', desc: 'Buttery, flaky, fresh daily' },
                { name: 'Granola Bowl', price: '$8.00', desc: 'Yogurt, seasonal fruit, honey' },
              ]},
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">{section.category}</h3>
                <div className="space-y-4">
                  {section.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-start border-b border-amber-100 pb-4 last:border-0">
                      <div>
                        <p className="font-semibold text-amber-900">{item.name}</p>
                        <p className="text-amber-600 text-sm">{item.desc}</p>
                      </div>
                      <span className="text-amber-700 font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 font-medium tracking-widest uppercase text-sm">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">
                Brewing Community Since 2016
              </h2>
              <p className="text-amber-800 text-lg leading-relaxed mb-6">
                Morning Brew started with a simple idea: create a space where great coffee 
                meets genuine connection. Our founder, Maria Santos, left her corporate job 
                to pursue her passion for coffee and community.
              </p>
              <p className="text-amber-800 text-lg leading-relaxed mb-8">
                We roast our beans in small batches right here in Boston, partnering directly 
                with farmers in Colombia, Ethiopia, and Guatemala. Every cup supports sustainable 
                farming practices and fair wages.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-amber-600">8</p>
                  <p className="text-amber-800">Years Brewing</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-amber-600">4</p>
                  <p className="text-amber-800">Origin Countries</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-amber-600">50K+</p>
                  <p className="text-amber-800">Cups Served</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-200"></div>
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-yellow-200 to-amber-200 mt-8"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Events</span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mt-4">What's Brewing</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { day: 'MON', title: 'Open Mic Night', time: '7:00 PM', icon: Music },
              { day: 'WED', title: 'Coffee Tasting', time: '6:00 PM', icon: Coffee },
              { day: 'SAT', title: 'Live Jazz', time: '8:00 PM', icon: Music },
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-200 flex items-center justify-center mb-4">
                  <event.icon className="h-8 w-8 text-amber-700" />
                </div>
                <p className="text-amber-600 font-bold tracking-widest">{event.day}</p>
                <h3 className="text-xl font-bold text-amber-900 mt-2 mb-1">{event.title}</h3>
                <p className="text-amber-700">{event.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="py-24 bg-amber-900 text-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">Visit Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Come Say Hello
              </h2>
              <p className="text-amber-200 text-lg mb-8">
                Whether you're grabbing a quick morning coffee or settling in for an afternoon 
                of work, we've got the perfect spot waiting for you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-amber-800 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-amber-300">142 Beacon Street, Boston, MA 02116</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-amber-800 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Hours</p>
                    <p className="text-amber-300">Mon-Fri: 6AM - 8PM | Sat-Sun: 7AM - 9PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-amber-800 flex items-center justify-center">
                    <Wifi className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Amenities</p>
                    <p className="text-amber-300">Free WiFi • Power outlets • Outdoor seating</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-amber-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Join Our Coffee Club</h3>
              <p className="text-amber-200 mb-6">Get a free drink on your birthday and earn rewards with every purchase.</p>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-amber-900 border border-amber-700 text-white placeholder-amber-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-amber-900 border border-amber-700 text-white placeholder-amber-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-amber-900 border border-amber-700 text-white placeholder-amber-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition-all" />
                <button type="submit" className="w-full bg-amber-400 text-amber-900 py-4 rounded-lg font-bold hover:bg-amber-300 transition-colors">
                  Join the Club
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center">
                <Coffee className="h-5 w-5 text-amber-900" />
              </div>
              <span className="text-xl font-bold text-white">Morning Brew</span>
            </div>
            <div className="flex space-x-6">
              <Instagram className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <p className="text-center mt-8 text-sm">© 2024 Morning Brew Coffee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
