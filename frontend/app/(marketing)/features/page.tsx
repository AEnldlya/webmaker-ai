'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Search, Wand2, Rocket, CreditCard, BarChart3 } from 'lucide-react';
import { WarmNav } from '@/components/warm-nav';

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
    <div className="min-h-screen bg-cream retro-pattern">
      <WarmNav showHome={true} showLinks={[{ label: 'Pricing', href: '/pricing' }]} />

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">Features</span>
            <h1 className="text-4xl md:text-5xl font-bold text-warm-gray-900 mt-3 mb-4 font-serif">Powerful Features</h1>
            <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto">
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
                className="retro-card p-8 hover:border-amber-300 transition-colors"
              >
                <div className="icon-warm-container mb-6">
                  <feature.icon className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-3 font-serif">{feature.title}</h3>
                <p className="text-warm-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
