'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Globe, Zap, Shield } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream retro-pattern">
      {/* Navbar */}
      <nav className="nav-warm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-amber-600" />
              </div>
              <span className="text-xl font-bold text-warm-gray-900 font-serif">WebMaker AI</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/features" className="text-warm-gray-600 hover:text-amber-600 transition-colors font-medium">
                Features
              </Link>
              <Link href="/pricing" className="text-warm-gray-600 hover:text-amber-600 transition-colors font-medium">
                Pricing
              </Link>
              <Link href="/docs" className="text-warm-gray-600 hover:text-amber-600 transition-colors font-medium">
                Docs
              </Link>
              <Link href="/login" className="text-warm-gray-600 hover:text-amber-600 transition-colors font-medium">
                Login
              </Link>
              <Link href="/register" className="btn-warm-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-amber-700 text-sm font-medium">Now with AI-powered design</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-warm-gray-900 mb-6 font-serif leading-tight">
              Build & Sell Websites
              <span className="block text-amber-600 mt-2">with Warmth</span>
            </h1>
            <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover local businesses without websites, generate stunning sites with AI, 
              and close deals—all in one beautifully crafted platform.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/register" className="btn-warm-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
                <span>Start Building</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/features" className="btn-warm-secondary text-lg px-8 py-4">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl"></div>
      </section>

      {/* Features */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-amber-600 font-medium text-sm uppercase tracking-wider"
            >
              Features
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-warm-gray-900 mt-3 mb-4 font-serif"
            >
              Everything You Need
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-warm-gray-600 text-lg"
            >
              A complete platform for website creation and sales
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Prospect Discovery', desc: 'Find local businesses without websites automatically using our intelligent search.' },
              { icon: Zap, title: 'AI Generation', desc: 'Generate professional websites in minutes with our warm, human-centered AI.' },
              { icon: Shield, title: 'Easy Deployment', desc: 'One-click deployment to Vercel with custom domains and SSL included.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                className="retro-card p-8 hover:shadow-warm-lg transition-shadow duration-300"
              >
                <div className="icon-warm-container mb-6">
                  <feature.icon className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-3 font-serif">{feature.title}</h3>
                <p className="text-warm-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="retro-card p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '10K+', label: 'Websites Built' },
                { value: '$2.5M', label: 'Revenue Generated' },
                { value: '98%', label: 'Satisfaction Rate' },
                { value: '24/7', label: 'AI Support' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl font-bold text-amber-600 font-serif mb-2">{stat.value}</div>
                  <div className="text-warm-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-warm-gray-900 mb-6 font-serif">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-warm-gray-600 mb-10 leading-relaxed">
              Join thousands of creators building beautiful websites and growing their businesses with warmth and purpose.
            </p>
            <Link 
              href="/register" 
              className="btn-warm-primary text-lg px-10 py-4 inline-flex items-center space-x-2 shadow-warm-lg"
            >
              <span>Create Free Account</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <p className="mt-6 text-warm-gray-500 text-sm">
              No credit card required. Start building in minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-warm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-amber-400" />
                </div>
                <span className="text-xl font-bold text-warm-white font-serif">WebMaker AI</span>
              </div>
              <p className="text-warm-gray-400 max-w-sm leading-relaxed">
                Building beautiful websites for local businesses with warmth, care, and cutting-edge AI technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-warm-white mb-4">Product</h4>
              <ul className="space-y-3 text-warm-gray-400">
                <li><Link href="/features" className="hover:text-amber-400 transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</Link></li>
                <li><Link href="/docs" className="hover:text-amber-400 transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-warm-white mb-4">Company</h4>
              <ul className="space-y-3 text-warm-gray-400">
                <li><Link href="/about" className="hover:text-amber-400 transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-warm-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-warm-gray-500 text-sm">© 2024 WebMaker AI. Crafted with warmth.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-warm-gray-500 hover:text-warm-gray-300 text-sm transition-colors">Privacy</Link>
              <Link href="/terms" className="text-warm-gray-500 hover:text-warm-gray-300 text-sm transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
