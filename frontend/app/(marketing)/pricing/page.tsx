'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Check } from 'lucide-react';
import { WarmNav } from '@/components/warm-nav';

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
    <div className="min-h-screen bg-cream retro-pattern">
      <WarmNav showHome={true} />

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">Pricing</span>
            <h1 className="text-4xl md:text-5xl font-bold text-warm-gray-900 mt-3 mb-4 font-serif">Simple Pricing</h1>
            <p className="text-xl text-warm-gray-600">Choose the plan that fits your needs</p>
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
                    ? 'bg-amber-600 border-2 border-amber-500 shadow-warm-lg'
                    : 'retro-card'
                }`}
              >
                {plan.popular && (
                  <span className="bg-warm-white text-amber-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-2xl font-bold mt-4 font-serif ${plan.popular ? 'text-white' : 'text-warm-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 ${plan.popular ? 'text-amber-100' : 'text-warm-gray-500'}`}>
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className={`text-4xl font-bold font-serif ${plan.popular ? 'text-white' : 'text-warm-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-amber-100' : 'text-warm-gray-500'}>
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check className={`h-5 w-5 ${plan.popular ? 'text-white' : 'text-amber-600'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-warm-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-warm-white text-amber-600 hover:bg-amber-50'
                      : 'bg-amber-600 text-white hover:bg-amber-700'
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
