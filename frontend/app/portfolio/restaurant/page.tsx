'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, UtensilsCrossed, Star, Clock, MapPin, Phone, Calendar, ChefHat, Wine } from 'lucide-react';

export default function RestaurantDemo() {
  return (
    <div className="min-h-screen bg-stone-50 font-serif">
      {/* Back to Portfolio */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all text-stone-800 hover:text-amber-600 border border-stone-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-medium text-sm">← Back to Portfolio</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-stone-900 text-stone-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <UtensilsCrossed className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Bella Vista</span>
                <span className="block text-xs text-amber-400 tracking-widest uppercase">Bistro & Wine Bar</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-stone-300 hover:text-amber-400 transition-colors">Our Story</a>
              <a href="#menu" className="text-stone-300 hover:text-amber-400 transition-colors">Menu</a>
              <a href="#chef" className="text-stone-300 hover:text-amber-400 transition-colors">Chef</a>
              <a href="#reservations" className="bg-amber-500 text-stone-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors">
                Reserve Table
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-stone-800">
          <div className="w-full h-full opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-400 font-medium tracking-[0.3em] uppercase text-sm">Est. 2018</span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mt-6 mb-8 leading-tight">
              Bella Vista
            </h1>
            <p className="text-2xl md:text-3xl text-stone-200 font-light italic mb-4">
              Where Italian Tradition
            </p>
            <p className="text-2xl md:text-3xl text-amber-400 font-light italic mb-10">
              Meets Modern Elegance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-amber-500 text-stone-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 transition-all shadow-xl hover:shadow-2xl flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Book a Table</span>
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
                View Menu
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-4 mb-8">
                A Taste of Italy in the Heart of the City
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Bella Vista was born from a simple dream: to bring authentic Italian flavors to our community. 
                Our founder, Chef Marco Rossi, spent decades perfecting his craft in the trattorias of Tuscany 
                before bringing his passion to Boston.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Every dish tells a story. From our handmade pasta to our wood-fired pizzas, we use only 
                the freshest ingredients sourced from local farms and imported directly from Italy.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-900 font-semibold">4.9/5 Rating</p>
                  <p className="text-stone-500 text-sm">2,000+ Reviews</p>
                </div>
                <div className="h-12 w-px bg-stone-200"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">6</p>
                  <p className="text-stone-600">Years of Excellence</p>
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
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100"></div>
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 mt-8"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-widest uppercase text-sm">Menu</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-4">Culinary Delights</h2>
            <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Each dish is crafted with passion using the finest ingredients</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Appetizers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center">
                <ChefHat className="h-6 w-6 mr-3 text-amber-600" />
                Antipasti
              </h3>
              <div className="space-y-6">
                {[
                  { name: 'Bruschetta al Pomodoro', price: '$12', desc: 'Grilled bread with fresh tomatoes, basil, and extra virgin olive oil' },
                  { name: 'Carpaccio di Manzo', price: '$18', desc: 'Thinly sliced beef with arugula, parmesan, and lemon dressing' },
                  { name: 'Burrata e Prosciutto', price: '$22', desc: 'Creamy burrata with aged prosciutto and balsamic glaze' },
                  { name: 'Calamari Fritti', price: '$16', desc: 'Crispy fried calamari with marinara sauce' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start border-b border-stone-200 pb-4">
                    <div>
                      <h4 className="font-semibold text-stone-900 text-lg">{item.name}</h4>
                      <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
                    </div>
                    <span className="text-amber-600 font-bold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pasta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center">
                <UtensilsCrossed className="h-6 w-6 mr-3 text-amber-600" />
                Primi Piatti
              </h3>
              <div className="space-y-6">
                {[
                  { name: 'Tagliatelle al Tartufo', price: '$32', desc: 'Fresh pasta with black truffle and parmesan cream' },
                  { name: 'Linguine alle Vongole', price: '$28', desc: 'Clams, garlic, white wine, and fresh herbs' },
                  { name: 'Risotto ai Frutti di Mare', price: '$34', desc: 'Arborio rice with seafood and saffron' },
                  { name: 'Gnocchi alla Sorrentina', price: '$24', desc: 'Potato gnocchi with tomato, mozzarella, and basil' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start border-b border-stone-200 pb-4">
                    <div>
                      <h4 className="font-semibold text-stone-900 text-lg">{item.name}</h4>
                      <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
                    </div>
                    <span className="text-amber-600 font-bold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Wine Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-stone-900 rounded-3xl p-12 text-white"
          >
            <div className="flex items-center justify-center mb-8">
              <Wine className="h-12 w-12 text-amber-400" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-4">Wine Selection</h3>
            <p className="text-stone-400 text-center max-w-2xl mx-auto mb-8">
              Explore our curated collection of Italian wines, from crisp Pinot Grigio to bold Barolo. 
              Our sommelier is happy to help you find the perfect pairing.
            </p>
            <div className="flex justify-center">
              <button className="border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 hover:text-stone-900 transition-all">
                View Wine List
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chef Section */}
      <section id="chef" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-stone-200 to-stone-300">
                <div className="w-full h-full flex items-center justify-center">
                  <ChefHat className="h-32 w-32 text-stone-400" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-stone-900 rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold">25+</p>
                <p className="text-sm font-medium">Years Experience</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 font-medium tracking-widest uppercase text-sm">Executive Chef</span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-4 mb-6">
                Marco Rossi
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Born and raised in Florence, Chef Marco learned the art of Italian cooking from his 
                grandmother in her small trattoria. After training at Le Cordon Bleu in Paris and 
                working in Michelin-starred restaurants across Europe, he returned to his roots.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                "For me, cooking is about love. Every dish I create carries a piece of my heritage, 
                my travels, and my passion for bringing people together around the table."
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">3</p>
                  <p className="text-stone-600 text-sm">Michelin Stars</p>
                </div>
                <div className="w-px bg-stone-200"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">15</p>
                  <p className="text-stone-600 text-sm">Awards Won</p>
                </div>
                <div className="w-px bg-stone-200"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">50K+</p>
                  <p className="text-stone-600 text-sm">Meals Served</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">Reservations</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Book Your Table
              </h2>
              <p className="text-stone-400 text-lg mb-8">
                Join us for an unforgettable dining experience. We recommend booking in advance, 
                especially for weekends and holidays.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-stone-400">Mon-Thu: 5PM - 10PM | Fri-Sat: 5PM - 11PM | Sun: 4PM - 9PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-stone-400">456 Hanover Street, Boston, MA 02113</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-stone-400">(617) 555-0456</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 text-stone-900"
            >
              <h3 className="text-2xl font-bold mb-6">Make a Reservation</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" />
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" />
                  <select className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all">
                    <option>Select Time</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
                <select className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all">
                  <option>Number of Guests</option>
                  <option>2 People</option>
                  <option>3-4 People</option>
                  <option>5-6 People</option>
                  <option>7+ People</option>
                </select>
                <textarea placeholder="Special Requests (optional)" rows={3} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"></textarea>
                <button type="submit" className="w-full bg-amber-500 text-stone-900 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors">
                  Confirm Reservation
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <UtensilsCrossed className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Bella Vista</span>
            </div>
            <p className="text-sm">© 2024 Bella Vista Bistro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
