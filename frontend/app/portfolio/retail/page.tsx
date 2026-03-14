'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Star, MapPin, Clock, Phone, Heart, Truck, Gift, Instagram, Facebook } from 'lucide-react';

export default function RetailDemo() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Back to Portfolio */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all text-slate-800 hover:text-violet-600 border border-slate-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-medium text-sm">← Back to Portfolio</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">URBAN</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#collections" className="text-slate-600 hover:text-violet-600 transition-colors font-medium">Collections</a>
              <a href="#about" className="text-slate-600 hover:text-violet-600 transition-colors font-medium">About</a>
              <a href="#lookbook" className="text-slate-600 hover:text-violet-600 transition-colors font-medium">Lookbook</a>
              <a href="#contact" className="text-slate-600 hover:text-violet-600 transition-colors font-medium">Visit Us</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-violet-100 transition-colors">
                <Heart className="h-5 w-5 text-slate-600" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-violet-100 transition-colors">
                <ShoppingBag className="h-5 w-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-96 h-96 bg-violet-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-violet-600 font-semibold tracking-widest uppercase text-sm">New Collection</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
                Define Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
                  Unique Style
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Curated fashion for the modern individual. Discover pieces that express who you are 
                from local and international designers.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-violet-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-violet-700 transition-all shadow-lg hover:shadow-xl">
                  Shop Collection
                </button>
                <button className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-full font-semibold hover:bg-violet-50 transition-all">
                  View Lookbook
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-violet-200 to-pink-300">
                <div className="w-full h-full flex items-center justify-center text-violet-400/50">
                  <ShoppingBag className="h-32 w-32" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-violet-600 font-semibold tracking-widest uppercase text-sm">Collections</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4">Shop by Category</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Women', items: '240 Items', color: 'from-violet-400 to-purple-500' },
              { name: 'Men', items: '180 Items', color: 'from-blue-400 to-indigo-500' },
              { name: 'Accessories', items: '120 Items', color: 'from-pink-400 to-rose-500' },
              { name: 'Shoes', items: '85 Items', color: 'from-amber-400 to-orange-500' },
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${category.color} mb-4 overflow-hidden`}>
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <ShoppingBag className="h-16 w-16 text-white/50" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.name}</h3>
                <p className="text-slate-500">{category.items}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-violet-600 font-semibold tracking-widest uppercase text-sm">Featured</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4">Trending Now</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Silk Blouse', price: '$89', tag: 'New' },
              { name: 'Tailored Blazer', price: '$149', tag: 'Best Seller' },
              { name: 'Leather Tote', price: '$129', tag: null },
              { name: 'Denim Jacket', price: '$119', tag: 'Sale' },
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-square rounded-2xl bg-white mb-4 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                    <ShoppingBag className="h-12 w-12 text-slate-300" />
                  </div>
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-slate-900">{product.name}</h3>
                <p className="text-violet-600 font-bold">{product.price}</p>
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
              <span className="text-violet-600 font-semibold tracking-widest uppercase text-sm">Our Story</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">
                Fashion with Purpose
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Urban Boutique was founded in 2018 with a simple mission: to bring curated, 
                sustainable fashion to Boston. We partner with independent designers who share 
                our commitment to quality and ethical production.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Every piece in our collection is hand-selected for its craftsmanship, uniqueness, 
                and ability to make you feel confident. We believe fashion should be an expression 
                of individuality, not conformity.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-violet-600">50+</p>
                  <p className="text-slate-600 text-sm">Designers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-violet-600">10K+</p>
                  <p className="text-slate-600 text-sm">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-violet-600">4.8</p>
                  <p className="text-slate-600 text-sm">Rating</p>
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
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100"></div>
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 mt-8"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-violet-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders over $75' },
              { icon: Gift, title: 'Gift Wrapping', desc: 'Complimentary on request' },
              { icon: Heart, title: 'Sustainable', desc: 'Eco-friendly packaging' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <feature.icon className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-violet-200">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-violet-600 font-semibold tracking-widest uppercase text-sm">Visit Us</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">
                Come Say Hello
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Visit our boutique in the heart of Boston. Our stylists are ready to help you 
                find your perfect look.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Location</p>
                    <p className="text-slate-600">88 Newbury Street, Boston, MA 02116</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Hours</p>
                    <p className="text-slate-600">Mon-Sat: 10AM - 8PM | Sun: 12PM - 6PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <p className="text-slate-600">(617) 555-0288</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Personal Styling</h3>
              <p className="text-slate-600 mb-6">Book a complimentary styling session with one of our fashion experts.</p>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all" />
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all">
                  <option>Preferred Date</option>
                  <option>This Week</option>
                  <option>Next Week</option>
                  <option>Any Time</option>
                </select>
                <button type="submit" className="w-full bg-violet-600 text-white py-4 rounded-lg font-bold hover:bg-violet-700 transition-colors">
                  Book Session
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">URBAN</span>
            </div>
            <div className="flex space-x-6">
              <Instagram className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <p className="text-center mt-8 text-sm">© 2024 Urban Boutique. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
