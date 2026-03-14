'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Globe, Zap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function WebsiteDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8">
      <Link href="/dashboard/websites" className="flex items-center text-gray-400 hover:text-white mb-6">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Websites
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Joe's Pizza</h1>
              <p className="text-gray-400 mt-1">Restaurant Website</p>
            </div>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-medium flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Deployed
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <p className="text-gray-400 text-sm">Lighthouse Score</p>
              <p className="text-3xl font-bold text-green-400 mt-1">92</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <p className="text-gray-400 text-sm">Status</p>
              <p className="text-3xl font-bold text-white mt-1">Live</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <p className="text-gray-400 text-sm">Created</p>
              <p className="text-3xl font-bold text-white mt-1">Jan 15</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://joes-pizza.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 flex items-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View Live Site
              </a>
              <a
                href="https://github.com/user/joes-pizza"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-600 flex items-center"
              >
                <Github className="h-5 w-5 mr-2" />
                View Code
              </a>
              <button className="bg-gray-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-600 flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Regenerate
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 p-8">
          <h3 className="text-lg font-semibold text-white mb-4">Deployment History</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
              <div className="flex items-center space-x-4">
                <Globe className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-white">Production Deployment</p>
                  <p className="text-gray-400 text-sm">dpl_abc123xyz</p>
                </div>
              </div>
              <span className="text-green-400">Ready</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
