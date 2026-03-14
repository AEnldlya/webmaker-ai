'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Globe, Zap, Shield } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-white">WebMaker AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/features" className="text-gray-300 hover:text-white">Features</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
              <Link href="/docs" className="text-gray-300 hover:text-white">Docs</Link>
              <Link href="/login" className="text-gray-300 hover:text-white">Login</Link>
              <Link href="/register" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
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
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Build & Sell Websites
              <span className="text-primary-500"> with AI</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Discover local businesses without websites, generate stunning sites with AI, 
              and close deals—all in one platform.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/register" className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 flex items-center space-x-2">
                <span>Start Building</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/features" className="border border-gray-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-gray-400">A complete platform for website creation and sales</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Prospect Discovery', desc: 'Find local businesses without websites automatically' },
              { icon: Zap, title: 'AI Generation', desc: 'Generate professional websites in minutes with AI' },
              { icon: Shield, title: 'Easy Deployment', desc: 'One-click deployment to Vercel with custom domains' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
              >
                <feature.icon className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of developers building and selling websites with AI.
          </p>
          <Link href="/register" className="bg-primary-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 inline-flex items-center space-x-2">
            <span>Create Free Account</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary-500" />
              <span className="text-lg font-bold text-white">WebMaker AI</span>
            </div>
            <p className="text-gray-500">© 2024 WebMaker AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
