'use client';

import { motion } from 'framer-motion';
import { FileText, Code, BookOpen, Video, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { WarmNav } from '@/components/warm-nav';

const docSections = [
  {
    icon: Code,
    title: 'API Reference',
    description: 'Complete API documentation for developers building integrations',
    href: '/docs/api',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    icon: BookOpen,
    title: 'Guides',
    description: 'Step-by-step guides for common tasks and workflows',
    href: '/docs/guides',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Watch and learn with our comprehensive video library',
    href: '/docs/videos',
    color: 'bg-rose-50 border-rose-200',
    iconColor: 'text-rose-600',
  },
  {
    icon: MessageCircle,
    title: 'Community',
    description: 'Join our community forum and connect with other builders',
    href: '/docs/community',
    color: 'bg-sage/10 border-sage/30',
    iconColor: 'text-sage',
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-cream retro-pattern">
      <WarmNav showHome={true} />

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">Documentation</span>
            <h1 className="text-4xl md:text-5xl font-bold text-warm-gray-900 mt-3 mb-4 font-serif">Documentation</h1>
            <p className="text-xl text-warm-gray-600">Learn how to use WebMaker AI</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {docSections.map((section, i) => (
              <Link href={section.href} key={section.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`retro-card p-8 hover:shadow-warm-lg transition-all duration-300 cursor-pointer group`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${section.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <section.icon className={`h-7 w-7 ${section.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-2 font-serif group-hover:text-amber-600 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-warm-gray-600">{section.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Quick Start Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 retro-card p-8 bg-amber-50 border-amber-200"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-2 font-serif">Quick Start Guide</h3>
                <p className="text-warm-gray-600 mb-4">
                  New to WebMaker AI? Start here for a step-by-step walkthrough of building your first website.
                </p>
                <Link 
                  href="/docs/quickstart" 
                  className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center space-x-1"
                >
                  <span>Read the Guide</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
