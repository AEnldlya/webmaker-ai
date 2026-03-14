'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileText, Code } from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
            <p className="text-xl text-gray-400">Learn how to use WebMaker AI</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/docs/api">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-colors"
              >
                <Code className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">API Reference</h3>
                <p className="text-gray-400">Complete API documentation for developers</p>
              </motion.div>
            </Link>

            <Link href="/docs/guides">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-colors"
              >
                <FileText className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Guides</h3>
                <p className="text-gray-400">Step-by-step guides for common tasks</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
