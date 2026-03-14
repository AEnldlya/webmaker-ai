'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Search, Wand2, Rocket, CreditCard, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Prospect Discovery',
    description: 'Automatically find local businesses without websites using our AI-powered search engine. Filter by category, location, and more.',
  },
  {
    icon: Wand2,
    title: 'AI Website Generation',
    description: 'Generate stunning, professional websites in minutes. Our AI creates custom designs tailored to each business type.',
  },
  {
    icon: Rocket,
    title: 'One-Click Deployment',
    description: 'Deploy websites instantly to Vercel with a single click. Get preview URLs to share with prospects immediately.',
  },
  {
    icon: CreditCard,
    title: 'Integrated Payments',
    description: 'Create payment links and collect payments directly through the platform. Stripe integration included.',
  },
  {
    icon: BarChart3,
    title: 'Financial Tracking',
    description: 'Track revenue, expenses, and profitability. Get insights into your business performance.',
  },
  {
    icon: Sparkles,
    title: 'Custom Domains',
    description: 'Purchase and configure custom domains for your clients. Automatic DNS configuration included.',
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-white">WebMaker AI</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
              <Link href="/login" className="text-gray-300 hover:text-white">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Powerful Features</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to build and sell websites at scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-colors"
              >
                <feature.icon className="h-12 w-12 text-primary-500 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
