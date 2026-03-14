'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Stethoscope, Heart, Clock, MapPin, Phone, Shield, CheckCircle, Calendar, User, FileText } from 'lucide-react';

export default function MedicalDemo() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Back to Portfolio */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all text-slate-800 hover:text-emerald-600 border border-slate-200"
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-900">CareFirst</span>
                <span className="block text-xs text-emerald-600 font-semibold tracking-wider uppercase">Medical Clinic</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">Services</a>
              <a href="#about" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">About</a>
              <a href="#doctors" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">Doctors</a>
              <a href="#insurance" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">Insurance</a>
              <a href="#contact" className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-xl">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-200 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 mb-6">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span className="text-emerald-700 text-sm font-semibold">Accepting New Patients</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Compassionate Care
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                  For Your Family
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Providing comprehensive primary care, preventive medicine, and specialty services 
                with a patient-centered approach. Your health is our priority.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                </button>
                <button className="border-2 border-emerald-500 text-emerald-500 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all">
                  (617) 555-0234
                </button>
              </div>
              <div className="flex items-center space-x-6 mt-10">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-300 to-teal-400 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mt-1">Trusted by 10,000+ patients</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-teal-200">
                <div className="w-full h-full flex items-center justify-center text-emerald-400/50">
                  <Heart className="h-32 w-32" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold text-emerald-500">20+</p>
                <p className="text-slate-600 text-sm">Years of Care</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4">Comprehensive Healthcare</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">From routine checkups to specialized care, we offer a full range of medical services</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: User, title: 'Primary Care', desc: 'Comprehensive health management for patients of all ages' },
              { icon: Heart, title: 'Preventive Medicine', desc: 'Annual physicals, screenings, and wellness programs' },
              { icon: Stethoscope, title: 'Chronic Disease', desc: 'Management of diabetes, hypertension, and heart disease' },
              { icon: FileText, title: 'Diagnostic Testing', desc: 'Lab work, EKGs, and imaging referrals' },
              { icon: Shield, title: 'Vaccinations', desc: 'Immunizations for children and adults' },
              { icon: Clock, title: 'Urgent Care', desc: 'Same-day appointments for non-emergency issues' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-300 to-teal-400 mb-4 flex items-center justify-center">
                      <Stethoscope className="h-16 w-16 text-white" />
                    </div>
                    <p className="text-slate-400">Modern Facility</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">About Us</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">
                Your Health, Our Mission
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                CareFirst Medical Clinic has been serving the Boston community since 2004. 
                Our team of board-certified physicians and healthcare professionals is dedicated 
                to providing personalized, compassionate care to every patient.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We believe in building lasting relationships with our patients. By understanding 
                your unique health history and concerns, we can provide better care and help you 
                achieve optimal wellness.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-500">8</p>
                  <p className="text-slate-600 text-sm mt-1">Expert Physicians</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-500">10K+</p>
                  <p className="text-slate-600 text-sm mt-1">Patients Served</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-500">4.9</p>
                  <p className="text-slate-600 text-sm mt-1">Patient Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Our Team</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4">Meet Our Physicians</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Sarah Chen', role: 'Family Medicine', exp: '15 years' },
              { name: 'Dr. Michael Torres', role: 'Internal Medicine', exp: '12 years' },
              { name: 'Dr. Emily Watson', role: 'Pediatrics', exp: '10 years' },
              { name: 'Dr. James Park', role: 'Cardiology', exp: '18 years' },
            ].map((doctor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-emerald-200 to-teal-300 mb-6 group-hover:scale-105 transition-transform"></div>
                <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
                <p className="text-emerald-600 font-medium">{doctor.role}</p>
                <p className="text-slate-500 text-sm">{doctor.exp} experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Insurance</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4">We Accept Most Major Insurance</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {['Blue Cross', 'Aetna', 'Cigna', 'UnitedHealth', 'Medicare', 'Medicaid'].map((insurance, i) => (
              <div key={i} className="bg-white px-8 py-4 rounded-xl shadow-sm border border-slate-200">
                <p className="font-semibold text-slate-700">{insurance}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600">Don't see your insurance? Contact us to verify coverage.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">Contact</span>
              <h2 className="text-4xl font-bold mt-4 mb-6">
                Schedule Your Visit
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Ready to prioritize your health? Book an appointment today. 
                New patients are always welcome.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-slate-400">250 Health Drive, Boston, MA 02115</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-slate-400">(617) 555-0234</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-slate-400">Mon-Fri: 8AM - 6PM | Sat: 9AM - 2PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-slate-900"
            >
              <h3 className="text-2xl font-bold mb-6">Request Appointment</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" />
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all">
                  <option>Select Service</option>
                  <option>Annual Physical</option>
                  <option>Sick Visit</option>
                  <option>Specialist Consultation</option>
                  <option>Vaccination</option>
                </select>
                <textarea placeholder="Reason for visit / Symptoms" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"></textarea>
                <button type="submit" className="w-full bg-emerald-500 text-white py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
                  Request Appointment
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CareFirst Clinic</span>
            </div>
            <p className="text-sm">© 2024 CareFirst Medical Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
