'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Wrench, Phone, Clock, Shield, CheckCircle, MapPin, Star, Droplets, Home, AlertCircle } from 'lucide-react';

export default function PlumberDemo() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Back to Portfolio */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all text-slate-800 hover:text-blue-600 border border-slate-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-medium text-sm">← Back to Portfolio</span>
        </Link>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center">
        <p className="text-sm font-semibold flex items-center justify-center gap-2">
          <AlertCircle className="h-4 w-4" />
          24/7 Emergency Service Available — Call (617) 555-0199
        </p>
      </div>

      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Quick Fix</span>
                <span className="block text-xs text-blue-400 font-bold tracking-wider uppercase">Plumbing & Drain</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">Services</a>
              <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">About</a>
              <a href="#why-us" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">Why Us</a>
              <a href="#reviews" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">Reviews</a>
              <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234f46e5" fill-opacity="0.08"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-semibold">Licensed & Insured</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fast, Reliable
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Plumbing Services
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Serving Boston and surrounding areas for over 15 years. From emergency repairs 
                to full installations, we've got you covered with upfront pricing and guaranteed work.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
                  Get Free Quote
                </button>
              </div>
              <div className="flex items-center space-x-8 mt-10">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Upfront Pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">24/7 Available</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Wrench className="h-32 w-32 mx-auto mb-6 opacity-80" />
                  <p className="text-2xl font-bold">Professional Tools</p>
                  <p className="text-blue-100">Expert Technicians</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600 fill-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">4.9</p>
                    <p className="text-slate-500 text-sm">500+ Reviews</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4">Comprehensive Plumbing Solutions</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">From minor repairs to major installations, we handle it all</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Droplets, title: 'Drain Cleaning', desc: 'Clogged drains cleared fast with hydro-jetting and snaking services', price: 'From $89' },
              { icon: Home, title: 'Pipe Repair', desc: 'Leak detection and pipe repair for copper, PVC, and PEX systems', price: 'From $149' },
              { icon: Wrench, title: 'Water Heaters', desc: 'Installation and repair of tank and tankless water heaters', price: 'From $199' },
              { icon: AlertCircle, title: 'Emergency Service', desc: '24/7 emergency plumbing for burst pipes, floods, and more', price: 'Available Now' },
              { icon: Shield, title: 'Sewer Lines', desc: 'Camera inspection, repair, and replacement of sewer lines', price: 'From $299' },
              { icon: CheckCircle, title: 'Fixtures', desc: 'Faucet, toilet, sink, and shower installation and repair', price: 'From $79' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                <p className="text-blue-600 font-bold">{service.price}</p>
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
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 mb-4 flex items-center justify-center">
                      <Wrench className="h-16 w-16 text-white" />
                    </div>
                    <p className="text-slate-400">Professional Team</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white rounded-xl p-6 shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-blue-100">Years Experience</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">About Us</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">
                Boston's Trusted Plumbing Experts
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Quick Fix Plumbing has been serving the Boston metro area since 2009. What started 
                as a one-truck operation has grown into a full-service plumbing company with a fleet 
                of 12 service vehicles and a team of licensed master plumbers.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We believe in honest pricing, quality workmanship, and treating every home like it's 
                our own. That's why 85% of our business comes from repeat customers and referrals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900">Licensed & Insured</p>
                    <p className="text-slate-600 text-sm">Full coverage protection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900">Upfront Pricing</p>
                    <p className="text-slate-600 text-sm">No hidden fees ever</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900">Satisfaction Guaranteed</p>
                    <p className="text-slate-600 text-sm">100% workmanship warranty</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900">24/7 Emergency</p>
                    <p className="text-slate-600 text-sm">Always available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className="text-4xl font-bold mt-4">The Quick Fix Difference</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '15K+', label: 'Jobs Completed', desc: 'Residential & commercial' },
              { number: '30 min', label: 'Average Response', desc: 'For emergency calls' },
              { number: '4.9/5', label: 'Customer Rating', desc: 'Based on 500+ reviews' },
              { number: '100%', label: 'Satisfaction', desc: 'Guaranteed workmanship' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-5xl font-bold text-blue-400 mb-2">{stat.number}</p>
                <p className="text-xl font-semibold mb-1">{stat.label}</p>
                <p className="text-slate-400">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Jennifer M.', location: 'Cambridge, MA', text: 'Called at 2 AM for a burst pipe. They arrived within 30 minutes and had it fixed before morning. Absolutely lifesaving service!' },
              { name: 'Robert K.', location: 'Somerville, MA', text: 'Fair pricing, professional crew, and they cleaned up after themselves. Best plumbing experience I\'ve ever had. Highly recommend!' },
              { name: 'Lisa T.', location: 'Brookline, MA', text: 'Installed a tankless water heater for us. The team was knowledgeable, efficient, and the price was exactly what they quoted. Great work!' },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[1,2,3,4,5].map(j => (
                    <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-slate-500 text-sm">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Contact Us</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">
                Get Your Free Quote Today
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Need plumbing help? We're here 24/7. Call us now or fill out the form for a free, 
                no-obligation estimate.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">(617) 555-0199</p>
                    <p className="text-slate-500">24/7 Emergency Line</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">78 Main Street</p>
                    <p className="text-slate-500">Boston, MA 02129</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Open 24/7</p>
                    <p className="text-slate-500">Emergency services always available</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                  <option>Select Service Needed</option>
                  <option>Drain Cleaning</option>
                  <option>Pipe Repair</option>
                  <option>Water Heater</option>
                  <option>Emergency Service</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Describe your plumbing issue..." rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"></textarea>
                <button type="submit" className="w-full bg-blue-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors">
                  Get Free Quote
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Quick Fix Plumbing</span>
            </div>
            <p className="text-sm">© 2024 Quick Fix Plumbing. Licensed & Insured.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
