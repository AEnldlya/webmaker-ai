'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for getting started',
    features: ['10 prospects/month', '5 website generations', 'Basic templates', 'Email support'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$79',
    period: '/month',
    description: 'For serious builders',
    features: ['Unlimited prospects', 'Unlimited generations', 'Premium templates', 'Priority support', 'Custom domains', 'Analytics'],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Agency',
    price: '$199',
    period: '/month',
    description: 'For teams and agencies',
    features: ['Everything in Pro', 'Team collaboration', 'White-label', 'API access', 'Dedicated support', 'Custom integrations'],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function PricingPage() {
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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple Pricing</h1>
            <p className="text-xl text-gray-400">Choose the plan that fits your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-primary-600 border-2 border-primary-500'
                    : 'bg-gray-800 border border-gray-700'
                }`}
              >
                {plan.popular && (
                  <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-2xl font-bold mt-4 ${plan.popular ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 ${plan.popular ? 'text-primary-100' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-primary-100' : 'text-gray-400'}>
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check className={`h-5 w-5 ${plan.popular ? 'text-white' : 'text-primary-500'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-8 py-3 rounded-xl font-semibold ${
                    plan.popular
                      ? 'bg-white text-primary-600 hover:bg-gray-100'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
